import React from "react";
import "./Navbar.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import MenuItem from "./MenuItem";
import logo from "../../assets/imgs/logos/logo.svg";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userPhoto = useSelector((state) => state.auth.photo);

  const { loginHandler, logoutHandler } = useAuth();

  return (
    <nav className="nav">
      <div className="nav-logo-menu">
        <Link to="/home">
          <div className="nav-logo">
            <img src={logo} alt="disney logo" />
          </div>
        </Link>

        {isLoggedIn && (
          <ul className="nav-menu-list">
            <MenuItem title="home" />
            <MenuItem title="search" />
            <MenuItem title="watchlist" />
            <MenuItem title="originals" />
            <MenuItem title="movies" />
            <MenuItem title="series" />
          </ul>
        )}
      </div>

      {!isLoggedIn && (
        <button className="nav-btn nav-login-btn" onClick={loginHandler}>
          LOGIN
        </button>
      )}

      {isLoggedIn && (
        <div className="nav-profile">
          <button className="nav-btn nav-logout-btn" onClick={logoutHandler}>
            LOGOUT
          </button>
          <img className="nav-user-img" src={userPhoto} alt="user photo" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
