import React from "react";
import "./MenuItem.scss";
// import homeIcon from "../../assets/imgs/icons/home-icon.svg";
// import moviesIcon from "../../assets/imgs/icons/movie-icon.svg";
// import originalsIcon from "../../assets/imgs/icons/original-icon.svg";
// import searchIcon from "../../assets/imgs/icons/search-icon.svg";
// import seriesIcon from "../../assets/imgs/icons/series-icon.svg";
// import watchlistIcon from "../../assets/imgs/icons/watchlist-icon.svg";
// import { AiFillHome as homeIcon } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { AiTwotoneStar } from "react-icons/ai";
import { RiMovie2Line } from "react-icons/ri";
import { BsCameraReelsFill } from "react-icons/bs";

const icons = {
  home: <AiFillHome className="nav-item-icon" />,
  search: <BiSearchAlt2 className="nav-item-icon" />,
  watchlist: <AiOutlinePlus className="nav-item-icon" />,
  originals: <AiTwotoneStar className="nav-item-icon" />,
  movies: <RiMovie2Line className="nav-item-icon" />,
  series: <BsCameraReelsFill className="nav-item-icon" />,
};
// const icons = {
//   home: homeIcon,
//   search: searchIcon,
//   watchlist: watchlistIcon,
//   originals: originalsIcon,
//   movies: moviesIcon,
//   series: seriesIcon,
// };

const MenuItem = ({ title }) => {
  return (
    <li className="nav-menu-list-item">
      <a href="#">
        {/* <img src={icons[title]} alt={title} /> */}
        <span className="nav-menu-list-item-icon">{icons[title]}</span>
        <span className="nav-menu-list-item-title">{title}</span>
      </a>
    </li>
  );
};

export default MenuItem;
