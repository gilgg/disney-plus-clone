import { useEffect } from "react";
import { auth, provider } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { login, logout } from "../store/authSlice";

const useAuth = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userEmail = useSelector((state) => state.auth.email);

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

  return {
    loginHandler,
    logoutHandler,
  };
};

export default useAuth;
