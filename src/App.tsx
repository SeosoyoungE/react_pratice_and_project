import { useState } from "react";
import "./App.css";
import Post from "./components/Post";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    //리턴값은 단 하나의 최상위 component만 있어야함 ex)Appdiv
    <div className="App">
      <Post author="소영" body="멋있다" />
      <Post author="나영" body="바보같다" />
      <Post author="희정" body="착하다" />
      <Post author="소영" body="ㅋㅋ바보들~~" />
    </div>
  );
}

export default App;
