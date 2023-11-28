import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="App">
      <h1>Vite + React + TS</h1>
    </div>
  );
}

export default App;
