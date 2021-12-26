import React, { useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/imgs/logos/logo.svg";
import MenuItem from "./MenuItem";
import { auth, provider } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { login, logout } from "../../store/authSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userEmail = useSelector((state) => state.auth.email);
  const userPhoto = useSelector((state) => state.auth.photo);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        history.replace("/home");
      }
    });
  }, [userEmail]);

  const setUser = (user) => {
    dispatch(
      login({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  const loginHandler = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        setUser(result.user);
        history.replace("/home");
      })
      .catch((err) => alert(err.message));
  };

  const logoutHandler = () => {
    auth.signOut();
    dispatch(logout());
    history.replace("/");
  };

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
