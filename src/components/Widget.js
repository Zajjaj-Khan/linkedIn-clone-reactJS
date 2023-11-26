import React from "react";
import "../Css/Widgets.css";
import InfoIcon from '@mui/icons-material/Info';
import { Avatar } from '@mui/material'
function Widget() {
  const newsArticle = (userName,description,profilePic) => (
    <div className="widgets-article">
      <div className="widgets-articleLeft">
        <Avatar src={profilePic}/>
      </div>
      <div className="widgets-articleRight">
        <h4>{userName}</h4>
        <p>{description}</p>
        <button>+ Follow</button>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets-header">
        <h2>Add to your feed</h2>
        <InfoIcon />
      </div>
      <div className="widgets-accounts">
      {newsArticle("National University of Science And Technology", "Company.Higher Education","https://upload.wikimedia.org/wikipedia/en/thumb/2/22/NUST_Vector.svg/640px-NUST_Vector.svg.png")}
      {newsArticle("Elon Musk", "Company.SpaceX","https://media.cnn.com/api/v1/images/stellar/prod/2023-11-10t153158z-1125989429-rc2fk1a1xpqh-rtrmadp-3-a24-elon-musk.JPG?c=16x9&q=h_720,w_1280,c_fill")}
      {newsArticle("ReactJS", "Company.Meta","https://media.sketchfab.com/models/540ff21ac0f54a038df6f634c7cce726/thumbnails/c7aff9789ba54201b3e850a06a262ead/715945dc7bd24448ad681a9b311cda69.jpeg")}
      {newsArticle("NED University of Engineering & Technology", "Company.Higher Education","https://nedadmissioncell.com/NED.png")}
      </div>
     
    </div>
  );
}

export default Widget;
