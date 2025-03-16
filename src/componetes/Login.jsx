import React from "react";
import { useState, useEffect } from "react";

import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import "./Login.css";
import iniciar from "../assets/iniciar.png";
import logo from "../assets/logo.png";
import google from "../assets/cromo.png";

function Login() {
  const [email, setEmail] = useState("");
  const [contraseña, setcontraseña] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);
  //inicio de sesion con google
  const handleGoogleSuccess = async (credentialResponse) => {
    console.log("Respuesta de Google:", credentialResponse); // Depura la respuesta completa
    console.log("Token de Google:", credentialResponse.credential); // Depura el token

    if (!credentialResponse.credential) {
      console.error("No se recibió un token válido de Google");
      return;
    }
    try {
      console.log("Token de Google:", credentialResponse.credential);
      // Enviar el token de Google al servidor
      const response = await fetch("http://localhost:5000/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: credentialResponse.credential }),
      });
      console.log("Token de Google:", credentialResponse.credential);
      const data = await response.json();

      if (data.success) {
        alert(`Inicio de sesión exitoso. Rol: ${data.user.rol_nombre}`);
        setError(null);

        // Guardar la información del usuario en el estado y en localStorage
        setUser(data.user);
        localStorage.setItem("user", JSON.stringify(data.user));
        console.log("Usuario autenticado:", data.user);
      } else {
        setError("Error al iniciar sesión con Google");
      }
    } catch (err) {
      console.error("Error en la solicitud:", err);
      setError("Error en el servidor");
    }
  };

  // funcion para mandar informacion al servidor del inicio de sesion y obtner una respuesta
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !contraseña) {
      setError("Por favor, completa todos los campos");
      return;
    }
    //realizaremos la consulta en try para manejar el error
    try {
      // realizamos la solicitud al backend
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email, contraseña }), //envia credenciales
      });
      //covertimos la respuesta del backend
      const data = await response.json();
      if (data.success) {
        alert("login exitoso");
        setError(null);
      } else {
        setError("Correo o contraseña incorrecta");
      }
    } catch (err) {
      console.error("Error en la solicitud", err);
      setError("error en el servidor");
    }
  };

   // Función para manejar errores en el inicio de sesión con Google
   const handleGoogleError = () => {
    console.error('Error en el inicio de sesión con Google');
    setError("Error al iniciar sesión con Google");
  };


  return (
    <div>
      <GoogleOAuthProvider clientId="832804160977-luoirii7nnr9hpa5c6nro7j3dh5piivl.apps.googleusercontent.com">
        <div className="login">
          <form onSubmit={handleSubmit}>
            <div className="logo">
              <img src={logo} width="400px" height="400px" />
            </div>
            <label className="input-label" htmlFor="mi-input">
              Email
            </label>
            <input
              type="email"
              placeholder="camilo@email.com"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="input-label" htmlFor="mi-input">
              password
            </label>
            <input
              type="password"
              placeholder="******"
              className="input-field"
              value={contraseña}
              onChange={(e) => setcontraseña(e.target.value)}
            />
            <div className="terminos">
              <input type="checkbox" required />
              <p>
                aceptar <a>Terminos y condiciones</a>
              </p>
            </div>
            <div className="error">{error && <p>{error}</p>}</div>

            <div className="button">
              <button type="submit">
                <img src={iniciar} />
              </button>
            </div>
            <div className="google-signin">
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={handleGoogleError}
                useOneTap
              />
            </div>
          </form>
        </div>
      </GoogleOAuthProvider>
    </div>
  );
}

export default Login;
