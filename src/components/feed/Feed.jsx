import axios from "axios";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";

export default function Feed({ username }) {
  const [posts, setPosts] = React.useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get(`/posts/timeline/${user._id}`);
      console.log(res.data);
      setPosts(res.data.sort((p1, p2) => {
        return new Date(p2.createdAt) - new Date(p1.createdAt);
      }));
    };
    fetchPosts();
  }, [username, user._id]);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
         {posts.map((post) => {
          return <Post key={post._id} post={post} />;
        })}
      </div>
    </div>
  );
}
