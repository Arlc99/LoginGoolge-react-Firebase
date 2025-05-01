import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./App.css";
import Login from "./componetes/Login";
import Register from "./componetes/Register";
import Navbar from "./componetes/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
        <Router>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/Login" element={<Login />}/>
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
