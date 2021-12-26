import React from "react";
import "./MoviesRow.css";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

const MoviesRow = ({ title, movies }) => {
  // const recommended = useSelector((state) => state.movie.recommended);

  return (
    <div className="movies-row">
      <h3 className="movies-row-title">{title}</h3>
      <div className="movies-row-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            name={movie.title}
            cardImg={movie.cardImg}
          />
        ))}
      </div>
    </div>
  );
};

export default MoviesRow;
