import { useState } from "react";
import "./App.css";
import PostList from "./components/PostList";
import MainHeader from "./components/MainHeader";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  function showModalHandler() {
    setModalIsVisible(true);
  }
  function hideModalHandler() {
    setModalIsVisible(false);
  }
  return (
    //리턴값은 단 하나의 최상위 component만 있어야함 ex)Appdiv
    <div className="App">
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostList
          modalIsVisible={modalIsVisible}
          hideModalHandler={hideModalHandler}
        />
      </main>
    </div>
  );
}

export default App;
