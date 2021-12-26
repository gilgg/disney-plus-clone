import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.scss";

const MovieCard = ({ id, name, cardImg }) => {
  return (
    <div className="movie-card">
      <Link className="movie-card-link" to={`/movies/${id}`}>
        <img className="movie-card-link-img" src={cardImg} alt="movie" />
      </Link>
    </div>
  );
};

export default MovieCard;
