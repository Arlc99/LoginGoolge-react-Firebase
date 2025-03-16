import React from "react";
import { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { getFirestore, doc, setDoc } from "firebase/firestore";
import { auth,db } from "../fireBase";
import "./Login.css";
import iniciar from "../assets/iniciar.png";
import logo from "../assets/logo.png";

function Login() {
  const [email, setEmail] = useState("");
  const [contraseña, setcontraseña] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);

  const handleGoogleLogin = async (response) => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser(user);

      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        role: "empleado", // Asignar el rol de "empleado"
      });
      window.alert("inicio de sesion con exito");
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
      setError("Error al iniciar sesión. Por favor, inténtalo de nuevo.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !contraseña) {
      setError("ningun campo debe estar vacio");
      return;
    }
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
      setError("correo o contraseña incorrecta");
    }
  };

  return (
    <div>
      <GoogleOAuthProvider clientId="908711477449-pbba0tphu28309ji6mtn5o8ed597uaou.apps.googleusercontent.com">
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
              <GoogleLogin onSuccess={handleGoogleLogin} useOneTap />
            </div>
          </form>
        </div>
      </GoogleOAuthProvider>
    </div>
  );
}

export default Login;
