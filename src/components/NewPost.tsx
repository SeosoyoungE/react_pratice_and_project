import classes from "./NewPost.module.css";
import { useState } from "react";
function NewPost({ onBodyChange, onNameChange, onCancel }) {
  const [enteredBody, setEnterdBody] = useState("");
  const [enteredName, setEnterdName] = useState("");

  function bodyChangeHandler(event) {
    setEnterdBody(event.target.value);
  }
  function nameChangeHandler(event) {
    setEnterdName(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const post = {
      body: enteredBody,
      author: enteredName,
    };
    console.log(post);
    onCancel();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={nameChangeHandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
