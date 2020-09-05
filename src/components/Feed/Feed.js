import React, { useEffect } from "react";
import "./feed.css";
import TweetBox from "./tweetBox/TweetBox";
import Post from "./post/Post";
import { useState } from "react";
import db from "../../firebase";
function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("post")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      });
  }, []);

  return (
    <div className="feed">
      {/** Header  */}
      <div className="feed__header">
        <h2> Daevin Twitter </h2>
      </div>

      {/** Tweet Box */}
      <TweetBox />
      {/** posts */}
      {posts.map((post) => (
        <Post
          avatar={post.userImage}
          displayName={post.username}
          timeStamp={post.timeStamp}
          image={post.image}
          text={post.text}
        />
      ))}
    </div>
  );
}

export default Feed;
