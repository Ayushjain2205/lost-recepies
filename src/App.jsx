import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App margin-large margin">
      <h2 className="text-3xl font-bold underline">
        <i class="fa-solid fa-drumstick-bite"></i> &nbsp;Lost Recipes!
      </h2>
      <Routes>
        <Route path="/" element={<div></div>} />
      </Routes>
    </div>
  );
}

export default App;
