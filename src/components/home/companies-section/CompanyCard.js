import React from "react";
import "./CompanyCard.css";

const CompanyCard = ({ logo, video }) => {
  const handleOnMouseOver = (e) => {
    // e.currentTarget.play();
    e.target.play();
  };

  const handleOnMouseOut = (e) => {
    // e.currentTarget.pause();
    e.target.pause();
  };

  return (
    <div className="company-card">
      <img src={logo} alt="logo" />
      <video
        autoPlay
        loop
        muted
        preload="none"
        onMouseOver={handleOnMouseOver}
        onMouseOut={handleOnMouseOut}
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default CompanyCard;
