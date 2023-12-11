import Post from "./Post";
import styles from "./PostList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";
import { useState } from "react";

function PostList() {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [enteredBody, setEnterdBody] = useState("");
  const [enteredName, setEnterdName] = useState("");
  function hideModalHandler() {
    setModalIsVisible(false);
  }
  function bodyChangeHandler(event) {
    setEnterdBody(event.target.value);
  }
  function nameChangeHandler(event) {
    setEnterdName(event.target.value);
  }
  return (
    <>
      {modalIsVisible ? (
        <Modal onClose={hideModalHandler}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onNameChange={nameChangeHandler}
          />
        </Modal>
      ) : null}

      <ul className={styles.posts}>
        <Post author={enteredName} body={enteredBody} />
        <Post author="나영" body="바보같다" />
        <Post author="희정" body="착하다" />
        <Post author="소영" body="바보들이당" />
      </ul>
    </>
  );
}

export default PostList;
