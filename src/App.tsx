import { useState } from "react";
import "./App.css";
import Post from "./components/Post";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="App">
      <Post />
    </div>
  );
}

export default App;
