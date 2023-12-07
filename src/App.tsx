import { useState } from "react";
import "./App.css";
import PostList from "./components/PostList";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    //리턴값은 단 하나의 최상위 component만 있어야함 ex)Appdiv
    <div className="App">
      <PostList />
    </div>
  );
}

export default App;
