import React, { useContext, useRef, useState } from "react";
import "./share.css";
import { PermMedia, Label, EmojiEmotions, Cancel } from "@material-ui/icons";
import { AuthContext } from "../../context/AuthContext";
import Avatar from "../../assets/avatar.jpg";
import axios from "axios";
export default function Share() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [file, setFile] = useState(null);
  const submitHandler = async (e) => {
    e.preventDefault();

    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      var data = new FormData();
      const fileName = file ? Date.now() + file.name : null;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      console.log(data);
      try {
        await axios.post("/upload", data);
      } catch (e) {
        console.log(e);
      }
    }

    try {
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src={user.profilePicture ? PF + user.profilePicture : Avatar}
            alt=""
          />
          <input
            className="shareInput"
            type="text"
            ref={desc}
            placeholder={`Share your thoughts ${user.username}...`}
          />
        </div>
        <hr className="shareHr" />

        {file && (
          <div className="shareImgContainer">
            <img src={URL.createObjectURL(file)} className="shareImg" alt="" />
            <Cancel className="shareCancelImg" onClick={() => setFile(null)} />
          </div>
        )}
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlfor="file" className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo/Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) =>
                  setFile(e.target.files[0].name ? e.target.files[0] : null)
                }
              />
            </label>
          </div>
          <button className="shareButton" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
}
