import React, { useState } from "react";
import { db } from "../fireBase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { IconButton, Button } from "@mui/material";// importar componente boton de material.iu
import Navbar from "./Navbar";

import "./Register.css";

import PersonIcon from "@mui/icons-material/Person"; // Icono de usuario
import EmailIcon from "@mui/icons-material/Email"; // Icono de email (opcional)
import LockIcon from "@mui/icons-material/Lock";
import BadgeIcon from "@mui/icons-material/Badge";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

function Register() {
  const [Email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [Cedula, setCedula] = useState("");
  const [Nombre, setNombre] = useState("");
  const [contraseña1, setContraseña1] = useState("");
  const [error, setError] = useState("");

  const handleSumit = async (e) => {
    e.preventDefault();
    if (!Nombre.trim()) {
      setError("El campo nombre es obligatorio");
      return;
    } else if (!isNaN(Nombre)) {
      setError("El campo nombre no puede contener numeros");
      return;
    }

    if (!Cedula.trim()) {
      setError("El campo cedula es obligatorio");
      return;
    } else if (isNaN(Cedula)) {
      setError("El campo cedula no puede contener letras");
      return;
    }

    if (!Email.trim()) {
      setError("El campo email es obligatorio");
      return;
    }

    if (!contraseña.trim()) {
      setError("el campo contraseña es obligatorio");
      return;
    }
    if (!contraseña1.trim()) {
      setError("confirmar la contraseña es obligatorio");
      return;
    }
    if (contraseña !== contraseña1) {
      setError("las contraseña no coinciden");
      return;
    }
    if (contraseña.length < 6) {
      setError("la contraseña debe tener al menor 6 caracteres");
      return;
    }

    const auth = getAuth();

    try {
      // 1. Crea el usuario en Firebase Auth (si usas email/contraseña)
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        Email,
        contraseña
      );
      const user = userCredential.user; // Obtiene el usuario autenticado

      await setDoc(
        doc(db, "users", user.uid),
        {
          nombre: Nombre, // Usa minúsculas para consistencia
          cedula: Cedula,
          email: Email,
          rol: "empleado",
          createdAt: serverTimestamp(), // Fecha automática
        },
        { merge: true }
      );
      limpiarFormulario();
      alert("usuario registrado con exito");
    } catch (error) {
      console.log(error);
      setError("Error al resgistrar el usuario");
    };
  };

  const limpiarFormulario = () => {
    setNombre("");
    setCedula("");
    setEmail("");
    setContraseña("");
    setContraseña1("");
    setError("");
  };
  return (
    <div>
      <Navbar/>
      <div className="registro">
        <form className="formRegister" onSubmit={handleSumit}>
          <div className="titulo">
            <h1>Registro De Usuario</h1>
          </div>
          <div className="persona">
            <div className="input_1">
              <PersonIcon sx={{ color: "#FFFFFF", mr: 1 }} />
              <input
                type="text"
                id="nombre"
                className="input-field"
                placeholder="nombre"
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="input_1">
              <BadgeIcon sx={{ color: "#FFFFFF", mr: 1 }} />
              <input
                type="text"
                id="Cedula"
                className="input-field"
                placeholder="1116924152"
                onChange={(e) => setCedula(e.target.value)}
              />
            </div>
          </div>

          <div className="input_1">
            <EmailIcon sx={{ color: "#FFFFFF", mr: 1 }} />
            <input
              type="email"
              id="Email"
              className="input-field"
              placeholder="Usuario@Email.com"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="contraseñas">
            <div className="input_1">
              <LockIcon sx={{ color: "#FFFFFF", mr: 1 }} />
              <input
                type="password"
                id="contraseña"
                className="input-field"
                placeholder="*****"
                onChange={(e) => setContraseña(e.target.value)}
              />
            </div>
            <div className="input_1">
              <LockIcon sx={{ color: "#FFFFFF", mr: 1 }} />
              <input
                type="password"
                id="contraseña1"
                className="input-field"
                placeholder="******"
                onChange={(e) => setContraseña1(e.target.value)}
              />
            </div>
          </div>
          <div className="termi">
            <input type="checkbox" id="terminos" required />
            <label htmlFor="terminos">
              acepto los <a>terminos y condiciones</a>
            </label>
          </div>
          <div className="boton">
            <Button
              type="submit"
             
              variant="outlined"
              color="inherit"
              startIcon={<AppRegistrationIcon sx={{ color: "#FFFFFF" }} />}
              sx={{
                fontWeight: 500,
                width: "200px",
                fontSize: "10px",
                color: "#FFFFFF",
                fontFamily: "sans-serif",

                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              Iniciar Sesión
            </Button>
          </div>
          <div className="error">{error && <p>{error}</p>}</div>
        </form>
      </div>
    </div>
  );
}

export default Register;
