import React, { useState, useEffect } from "react";
import firebase from "firebase";
import "./tweetBox.css";
import { Button, Avatar } from "@material-ui/core";
import { useStateValue } from "../../../StateProvider";
import db from "../../../firebase";

function TweetBox() {
  const [input, setInput] = useState("");
  const [imageInput, setImageInput] = useState("");
  const [{ user }, dispactch] = useStateValue();

  useEffect(() => {}, []);
  const savePost = (e) => {
    e.preventDefault();
    db.collection("post")
      .add({
        username: user?.displayName,
        userImage: user?.photoURL,
        text: input,
        image: imageInput,
        timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        setInput("");
        setImageInput("");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="tweetBox">
      <form onSubmit={savePost}>
        <div className="tweetBox__input">
          <Avatar src={user?.photoURL} />
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            placeholder={`What is happening?`}
            type="text"
          />
          <input
            value={imageInput}
            onChange={(e) => {
              setImageInput(e.target.value);
            }}
            className="tweetBox__inputImage"
            placeholder=" Optional: Enter image url"
            type="text"
          />
        </div>
        <button type="submit" className="tweet__btn">
          Tweet
        </button>
      </form>
    </div>
  );
}

export default TweetBox;
