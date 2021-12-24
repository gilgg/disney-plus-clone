import React from "react";
import "./Navbar.css";
import logo from "../../assets/imgs/logos/logo.svg";
import MenuItem from "./MenuItem";
import { auth, provider } from "../../firebase";
// import auth from "../../firebase";
// import { auth } from "../../firebase";

const Navbar = () => {
  const handleAuth = () => {
    // auth
    //   .signInWithPopup(provider)
    //   .then((result) => console.log(result))
    //   .catch((err) => alert(err.message));
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo-menu">
        <div className="navbar-logo">
          <img src={logo} alt="disney logo" />
        </div>
        <ul className="nav-menu-list">
          <MenuItem title="home" />
          <MenuItem title="search" />
          <MenuItem title="watchlist" />
          <MenuItem title="originals" />
          <MenuItem title="movies" />
          <MenuItem title="series" />
        </ul>
      </div>
      <button className="navbar-btn" onClick={handleAuth}>
        LOGIN
      </button>
    </nav>
  );
};

export default Navbar;
