import React, { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../fireBase";
import { serverTimestamp } from "firebase/firestore";
import { IconButton, Button } from "@mui/material";// importar componente boton de material.iu
import Navbar from './Navbar';
import "./Login.css";


//icono de material.iu
import EmailIcon from "@mui/icons-material/Email"; // Icono de email (opcional)
import LockIcon from "@mui/icons-material/Lock";
import GoogleIcon from "@mui/icons-material/Google";
import LoginIcon from "@mui/icons-material/Login";

function Login() {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    const auth = getAuth(); // Obtén la instancia de autenticación
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider); // Usa signInWithPopup
      const user = result.user;

      if (user) {
        // Guarda la información del usuario en Firestore
        await setDoc(
          doc(db, "users", user.uid),
          {
            email: user.email,
            role: "empleado",
            nombre: user.displayName,
            createdAt: serverTimestamp(),
          },
          { merge: true }
        );
      }

      window.alert("Inicio de sesión con éxito");
      setError(""); // Limpia el error si la autenticación es exitosa
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
      if (error.code === "auth/popup-closed-by-user") {
        setError(
          "El popup de Google se cerró antes de completar la autenticación."
        );
      } else {
        setError("Error al iniciar sesión. Por favor, inténtalo de nuevo.");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !contraseña) {
      setError("Ningún campo debe estar vacío.");
      return;
    }
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        contraseña
      );
      const user = userCredential.user;
      console.log("Usuario autenticado:", user);
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      if (error.code === "auth/invalid-email") {
        setError("El correo electrónico no es válido.");
      } else if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/wrong-password"
      ) {
        setError("Correo o contraseña incorrecta.");
      } else {
        setError("Error al iniciar sesión. Por favor, inténtalo de nuevo.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="login">
        
        <form className="form" onSubmit={handleSubmit}>
          <h1 className="titu">LOG IN</h1>

          <div className="input_1">
            <EmailIcon sx={{ color: "#1E1E1E", mr: 1, background: "#E8EDE4" }} />
            <input
              type="email"
              placeholder="camilo@email.com"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input_1">
            <LockIcon sx={{ color: "#1E1E1E", mr: 1 }} />
            <input
              type="password"
              placeholder="******"
              className="input-field"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
            />
          </div>

          <div className="terminos">
            <input type="checkbox" required />
            <p>
              Aceptar <a>Terminos y condiciones</a>
            </p>
          </div>
          <div className="Register">
            <p>
              ¿no tiene cuenta? <a href="/Register">registrarse</a>
            </p>
          </div>
          <div className="botones">
            <div className="error">{error && <p>{error}</p>}</div>
            <div className="button">
             
              <Button
                type="submit"
                onClick={handleSubmit}
                disabled={loading}
                variant="outlined"
                color="inherit"
                startIcon={<LoginIcon sx = {{ color: "#FFFF"}}/>}
                sx={{
                  fontWeight: 500,
                  width: "200px",
                  fontSize: "10px",
                  color: "#FFFF",
                  fontFamily: "sans-serif",
                   backgroundColor: "#0b880f",
                   borderColor: "#0b880f",
                  "&:hover": {
                    backgroundColor: "rgba(4, 77, 6,)", // Verde 5% opacidad
                    borderColor: "#0b880f",
                  },
                  transition: "all 0.2s ease",
                  padding: "0 8px", // Ajuste de padding para altura pequeña
                  textTransform: "none", // Evita mayúsculas automáticas
                  lineHeight: 1, // Altura de línea compacta
                  
                }}
              >
                Iniciar Sesión
              </Button>
            </div>
            <div className="google-signin">
              <Button
                onClick={handleGoogleLogin}
                variant="outlined"
                color="inherit"
                startIcon={<GoogleIcon sx={{ color: "#FFFF" }} />}
                sx={{
                  fontWeight: 500,
                  width: "200px",
                  fontSize: "10px",
                  color: "#FFFF",
                  fontFamily: "sans-serif",
                   backgroundColor: "#0b880f",
                 borderColor: "#0b880f",
                  "&:hover": {
                    backgroundColor: "rgba(4, 77, 6,)", // Verde 5% opacidad
                    borderColor: "#0b880f",
                  },
                  transition: "all 0.2s ease",
                  padding: "0 8px", // Ajuste de padding para altura pequeña
                  textTransform: "none", // Evita mayúsculas automáticas
                  lineHeight: 1, // Altura de línea compacta
                }}
              >
                Iniciar Sesión con Google
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
