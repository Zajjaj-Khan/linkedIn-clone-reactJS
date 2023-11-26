import { Avatar } from "@mui/material";
import React from "react";
import "../Css/sidebar.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
function SideBar() {
  const user = useSelector(selectUser);
  const recentItems = (topics) => {
    return (
      <div className="sidebar-recent">
        <span className="sidebar-hash">#</span>
        <p>{topics}</p>
      </div>
    );
  };
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/020/933/072/small/abstract-blur-gradient-background-vector.jpg"
          alt=""
        />
        <Avatar src={user?.photoUrl} className="sidebar-avatar">{user?.displayName[0]}</Avatar>
        <h2>{user?.displayName}</h2>
        <h4>{user?.email}</h4>
      </div>
      <div className="sidebar-stats">
        <div className="sidebar-stat">
          <p>Who viewed you</p>
          <p className="sidebar-number">2,567</p>
        </div>
        <div className="sidebar-stat">
          <p>Impressions on post</p>
          <p className="sidebar-number">6,167</p>
        </div>
      </div>
      <div className="sidebar-bottom">
        <p>Recent</p>
        {recentItems("BlockChain")}
        {recentItems("Javascript")}
        {recentItems("Web-3 Dev")}
        {recentItems("reactJS")}
        {recentItems("Dev Community")}
        {recentItems("Skills")}
      </div>
    </div>
  );
}

export default SideBar;
