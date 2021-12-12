import React, { useContext } from "react";
import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import avatar from "../../assets/avatar.jpg";

export default function Topbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">JIIT KONTAKT</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input
            type="text"
            placeholder="Search here"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">3</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">9</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={user.profilePicture ? user.profilePicture : avatar}
            alt=""
            className="topbarImg"
          />
        </Link>
        {/* create a logout Link */}
        <Link onClick={()=>{
          localStorage.removeItem('token');
          window.location.href = '/';
        }}
        style={{
          color: '#fff',
          textDecoration: 'none',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          marginLeft: '1rem'
    
         }}
        >
          <span className="topbarLink">Logout</span>
        </Link>

      </div>
    </div>
  );
}
