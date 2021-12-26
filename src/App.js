import React from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./components/Login";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";

const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            {!isLoggedIn && <Login />}
            {isLoggedIn && <Redirect to="/home" />}
          </Route>
          <Route path="/home">
            {isLoggedIn && <HomePage />}
            {!isLoggedIn && <Redirect to="/" />}
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
