import Post from "./Post";
import styles from "./PostList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";
import { useState } from "react";

function PostList({ modalIsVisible, hideModalHandler }) {
  return (
    <>
      {modalIsVisible ? (
        <Modal onClose={hideModalHandler}>
          <NewPost onCancel={hideModalHandler} />
        </Modal>
      ) : null}

      <ul className={styles.posts}>
        <Post author="나영" body="바보같다" />
        <Post author="희정" body="착하다" />
        <Post author="소영" body="바보들이당" />
      </ul>
    </>
  );
}

export default PostList;
