// firebase-config.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyARIuEnutVUh_9kRgY1Ja6gynlnh8PR5M0",
  authDomain: "login-mejorado.firebaseapp.com",
  projectId: "login-mejorado",
  storageBucket: "login-mejorado.firebasestorage.app",
  messagingSenderId: "757130729912",
  appId: "1:757130729912:web:e5a965d62fc9fe6dc3174d",
  measurementId: "G-5KLBCM1EB9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };