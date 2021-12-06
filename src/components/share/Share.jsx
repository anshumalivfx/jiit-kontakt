import React from "react";
import "./share.css";
import { PermMedia, Label, EmojiEmotions } from '@material-ui/icons';

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
          <input
            className="shareInput"
            type="text"
            placeholder="Share your thoughts..."
          />

        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMedia htmlColor="tomato" className="shareIcon" />
                    <span className="shareOptionText">Photo/Video</span>
                </div>
            </div>
            <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
