import React from "react";
import "./CompanyCard.scss";

const CompanyCard = ({ logo, video }) => {
  const handleOnMouseOver = (e) => {
    e.target.play();
  };

  const handleOnMouseOut = (e) => {
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
