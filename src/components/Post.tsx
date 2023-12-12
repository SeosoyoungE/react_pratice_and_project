import styles from "./Post.module.css";

type Props = {
  author: string;
  body: string;
};

function Post({ author, body }: Props) {
  return (
    <li className={styles.post}>
      <p className={styles.author}>{author}</p>
      <p className={styles.text}>{body}</p>
    </li>
  );
}

export default Post;
