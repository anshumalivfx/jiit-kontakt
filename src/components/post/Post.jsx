import React, { useState, useEffect, useContext } from "react";
import "./post.css";
import { MoreVert } from "@material-ui/icons";
import axios from "axios";
import Avatar from "../../assets/avatar.jpg";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Post({ post }) {
  const [likes, setLikes] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser } = useContext(AuthContext);

  const isLikeHandler = () => {
    try {
      axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
    } catch (err) {
      console.log(err);
    }

    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [post.likes, currentUser._id]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/user?userId=${post.userId}`);
      setUser(res.data.other);
    };
    fetchUser();
  }, []);

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link
              to={`/profile/${user.username}`}
              style={{ textDecoration: "none" }}
            >
              <img
                className="postProfileImg"
                src={user.profilePicture ? PF + user.profilePicture : Avatar}
                alt=""
              />
              <span className="postUserName">{user.username}</span>
            </Link>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={PF + post.img} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="/assets/heart.png"
              onClick={isLikeHandler}
              alt=""
            />
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
