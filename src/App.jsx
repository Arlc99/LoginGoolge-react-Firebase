import { useState } from "react";

import "./App.css";
import Login from "./componetes/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="login">
        <Login />
      </div>
    </>
  );
}

export default App;
