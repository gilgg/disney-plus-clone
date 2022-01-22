import React from "react";
import "./Home.scss";
import useGetMoviesFromDb from "../../hooks/useGetMoviesFromDb";
import ImgSlider from "./slider/ImgSlider";
import Companies from "./companies-section/Companies";
import Movies from "./movies/Movies";

const Home = () => {
  useGetMoviesFromDb();

  return (
    <div className="home">
      <ImgSlider />
      <Companies />
      <Movies />
    </div>
  );
};

export default Home;
