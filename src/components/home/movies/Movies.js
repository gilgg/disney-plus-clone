import React from "react";
import "./Movies.css";
import MoviesRow from "./MoviesRow";
// import { recommended, newToDisney, originals, trending } from "./MoviesData";
import { useSelector } from "react-redux";

const Movies = () => {
  const recommended = useSelector((state) => state.movie.recommended);
  const newToDisney = useSelector((state) => state.movie.newToDisney);
  const original = useSelector((state) => state.movie.original);
  const trending = useSelector((state) => state.movie.trending);

  return (
    <div className="section-movies">
      <MoviesRow title="Recommended For You" movies={recommended} />
      <MoviesRow title="New to Disney+" movies={newToDisney} />
      <MoviesRow title="Originals" movies={original} />
      <MoviesRow title="Trending" movies={trending} />
    </div>
  );
};

export default Movies;
