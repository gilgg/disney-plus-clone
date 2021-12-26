import React, { useState, useEffect } from "react";
import "./MovieDetails.scss";
import { useParams } from "react-router-dom";
import { HiUserGroup } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { db } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";

const MovieDetails = () => {
  const movieId = useParams();
  const [details, setDetails] = useState({});
  console.log("movieId is: ", movieId);

  useEffect(async () => {
    const moviesRef = collection(db, "movies");
    const moviesDocs = await getDocs(moviesRef);
    const movieDoc = moviesDocs.docs.find((doc) => doc.id === movieId.movieId);
    if (movieDoc) {
      setDetails(movieDoc.data());
      console.log("FOUND!");
    } else {
      console.error("No such document in firebase.");
    }
  }, [movieId]);

  return (
    <div className="movie-details">
      <img
        className="movie-details-bg-img"
        src={details.backgroundImg}
        alt={details.title}
      />

      <div className="movie-details-container">
        <div className="movie-details-content">
          <img
            className="movie-details-content-title-img"
            src={details.titleImg}
            alt={details.title}
          />
          <div className="movie-details-content-btns">
            <button className="play-btn movie-details-content-btns-btn">
              <FaPlay className="play-icon play-icon-black movie-details-content-icon" />
              <span>PLAY</span>
            </button>
            <button className="trailer-btn movie-details-content-btns-btn">
              <FaPlay className="play-icon play-icon-white movie-details-content-icon" />
              <span>TRAILER</span>
            </button>
            <div className="other-btns">
              <button className="plus-btn movie-details-content-btns-btn">
                <AiOutlinePlus className="plus-icon movie-details-content-icon" />
              </button>
              <button className="people-btn movie-details-content-btns-btn">
                <HiUserGroup className="group-icon movie-details-content-icon" />
              </button>
            </div>
          </div>
          <p className="movie-details-content-subtitle">{details.subTitle}</p>
          <p className="movie-details-content-desc">{details.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
