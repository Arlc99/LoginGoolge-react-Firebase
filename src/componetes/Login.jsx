import React, { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../fireBase";
import "./Login.css";
import iniciar from "../assets/iniciar.png";
import logo from "../assets/logo.png";

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
        await setDoc(doc(db, "users", user.uid), {
          email: user.email,
          role: "empleado", // Asignar el rol de "empleado"
        }, { merge: true });
      }

      window.alert("Inicio de sesión con éxito");
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
      if (error.code === "auth/popup-closed-by-user") {
        setError("El popup de Google se cerró antes de completar la autenticación.");
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
      const userCredential = await signInWithEmailAndPassword(auth, email, contraseña);
      const user = userCredential.user;
      console.log("Usuario autenticado:", user);
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      if (error.code === "auth/invalid-email") {
        setError("El correo electrónico no es válido.");
      } else if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
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
      <div className="login">
        <form onSubmit={handleSubmit}>
          <div className="logo">
            <img src={logo} width="400px" height="400px" alt="Logo" />
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
            Contraseña
          </label>
          <input
            type="password"
            placeholder="******"
            className="input-field"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
          />
          <div className="terminos">
            <input type="checkbox" required />
            <p>
              Aceptar <a>Terminos y condiciones</a>
            </p>
          </div>
          <div className="error">{error && <p>{error}</p>}</div>
          <div className="button">
            <button type="submit" disabled={loading}>
              <img src={iniciar} alt="Iniciar sesión" />
            </button>
          </div>
          <div className="google-signin">
            <button type="button" onClick={handleGoogleLogin}>
              Iniciar sesión con Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;