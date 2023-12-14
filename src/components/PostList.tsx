import { useState, useEffect } from "react";

import Post from "./Post";
import styles from "./PostList.module.css";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch("https://f98cwh-8080.csb.app/posts");
      const resData = await response.json();
      if (!response.ok) {
        console.log("post를 받아오지 못했습니다.");
      }
      setPosts(resData.posts);
      setIsFetching(false);
    }
    fetchPosts();
  }, []);
  function addPostHandler(postData) {
    fetch("https://f98cwh-8080.csb.app/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }
  return (
    <>
      {!isFetching && posts.length > 0 ? (
        <ul className={styles.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      ) : null}
      {!isFetching && posts.length === 0 ? (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no Posts yet.</h2>
          <a>Start adding some!</a>
        </div>
      ) : null}
      {isFetching ? (
        <div style={{ textAlign: "center", color: "white" }}>
          <p>Loading Posts...</p>
        </div>
      ) : null}
    </>
  );
}

export default PostList;
