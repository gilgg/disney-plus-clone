import React from "react";
import "./MenuItem.scss";
import icons from "./iconsData"

const MenuItem = ({ title }) => {
  return (
    <li className="nav-menu-list-item">
      <a href="#">
        <span className="nav-menu-list-item-icon">{icons[title]}</span>
        <span className="nav-menu-list-item-title">{title}</span>
      </a>
    </li>
  );
};

export default MenuItem;
