import React from "react";
import "./MenuItem.css";
import homeIcon from "../../assets/imgs/icons/home-icon.svg";
import moviesIcon from "../../assets/imgs/icons/movie-icon.svg";
import originalsIcon from "../../assets/imgs/icons/original-icon.svg";
import searchIcon from "../../assets/imgs/icons/search-icon.svg";
import seriesIcon from "../../assets/imgs/icons/series-icon.svg";
import watchlistIcon from "../../assets/imgs/icons/watchlist-icon.svg";

const icons = {
  home: homeIcon,
  search: searchIcon,
  watchlist: watchlistIcon,
  originals: originalsIcon,
  movies: moviesIcon,
  series: seriesIcon,
};

const MenuItem = ({ title }) => {
  return (
    <li className="nav-menu-list-item">
      <a href="#">
        <img src={icons[title]} alt={title} />
        <span>{title}</span>
      </a>
    </li>
  );
};

export default MenuItem;
