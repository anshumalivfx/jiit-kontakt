import React from "react";
import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/gift.png" alt="" />
          <span className="birthdayText">
            Many MILFs have their birthday today
          </span>
        </div>
        <img className="rightbarAd" src="/assets/ad.jpeg" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => {
            return <Online user={u} key={u.id} />;
          })}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () =>{
      return(
          <>
         <h4 className="rightbarTitle">User Information</h4>
         <div className="rightbarInfo">
             <div className="rightbarInfoItem">
                 <span className="rightbarInfoKey">City:</span>
                 <span className="rightbarInfoValue">Kotdwara</span>
             </div>
             <div className="rightbarInfoItem">
                 <span className="rightbarInfoKey">From:</span>
                 <span className="rightbarInfoValue">Dehradun</span>
             </div>
             <div className="rightbarInfoItem">
                 <span className="rightbarInfoKey">Relationship:</span>
                 <span className="rightbarInfoValue">Single</span>
             </div>
         </div>
            <h4 className="rightbarTitle">User Followers</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">MILF</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">MILF</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">MILF</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">MILF</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">MILF</span>
                </div>
                
            </div>
          </>
      )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
          {profile ? <ProfileRightBar/> : <HomeRightbar/>} 
      </div>
    </div>
  );
}
