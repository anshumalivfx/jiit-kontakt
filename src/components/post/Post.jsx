import React from "react";
import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";

export default function Post({ post }) {
  const [likes, setLikes] = React.useState(post.like);
  const [isLiked, setIsLiked] = React.useState(false)
  const isLikeHandler = () => {
    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src= {Users.filter((u) => u.id === post.id)[0].profilePicture}
              alt=""
            />
            <span className="postUserName">
              {Users.filter((u) => u.id === post.id)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="/assets/heart.png" onClick={isLikeHandler} alt="" />
            <span className="likeCount">{likes}</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
