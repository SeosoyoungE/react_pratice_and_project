import Post from "./Post";
import styles from "./PostList.module.css";
import NewPost from "./NewPost";

function PostList() {
  return (
    <>
      <NewPost />
      <ul className={styles.posts}>
        <Post author="소영" body="멋있다" />
        <Post author="나영" body="바보같다" />
        <Post author="희정" body="착하다" />
        <Post author="소영" body="바보들이당" />
      </ul>
    </>
  );
}

export default PostList;
