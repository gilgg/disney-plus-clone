import React from "react";
import "./MoviesRow.scss";
import MovieCard from "./MovieCard";

const MoviesRow = ({ title, movies }) => {
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
