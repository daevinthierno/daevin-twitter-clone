import React from "react";
import "./post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({
  displayName,
  username,
  verified,
  text,
  timeStamp,
  image,
  avatar,
}) {
  return (
    <div className="post">
      <div className="post_avatar">
        <Avatar src={avatar && avatar} />
      </div>
      <div className="post_body">
        <div className="post_headerText">
          <h3>
            {displayName && displayName}
            <span className="post_specialHeader">
              <VerifiedUserIcon className="post_badge" />@
              {new Date(timeStamp.toDate()).toUTCString()}
            </span>
          </h3>
          <div className="post_headerDescription">
            <p> {text && text} </p>
          </div>
        </div>
        <img src={image && image} />
        <div className="post_footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
