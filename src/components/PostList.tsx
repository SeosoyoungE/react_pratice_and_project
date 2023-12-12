import Post from "./Post";
import styles from "./PostList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";
import { useState } from "react";

function PostList({ modalIsVisible, hideModalHandler }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    fetch("https://f98cwh-8080.csb.app/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "appplication/json",
      },
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }
  return (
    <>
      {modalIsVisible ? (
        <Modal onClose={hideModalHandler}>
          <NewPost onCancel={hideModalHandler} onAddPost={addPostHandler} />
        </Modal>
      ) : null}

      {posts.length > 0 ? (
        <ul className={styles.posts}>
          {/* 배열 인식이 가능하기떄문에 배열로 변경 */}
          {/* map(1)=>(2)은 (1)에서 (2)로 배열식을 변경해줌 */}
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
          {/*배열 인식의 예시) {[<p key="1">test</p>, <p key="2">test2</p>]} */}
        </ul>
      ) : null}
      {posts.length === 0 ? (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no Posts yet.</h2>
          <a>Start adding some!</a>
        </div>
      ) : null}
    </>
  );
}

export default PostList;
