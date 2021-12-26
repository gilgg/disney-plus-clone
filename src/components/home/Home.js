import React, { useEffect } from "react";
import "./Home.scss";
import { useDispatch } from "react-redux";
import ImgSlider from "./slider/ImgSlider";
import Companies from "./companies-section/Companies";
import Movies from "./movies/Movies";
import { setMovies } from "../../store/movieSlice";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

const Home = () => {
  const dispatch = useDispatch();
  let recommendedMovies = [];
  let newDisneyMovies = [];
  let originalMovies = [];
  let trendingMovies = [];

  const getDB = async () => {
    const moviesRef = collection(db, "movies");
    const moviesDocs = await getDocs(moviesRef);

    moviesDocs.docs.forEach((doc) => {
      switch (doc.data().type) {
        case "recommend":
          recommendedMovies = [
            ...recommendedMovies,
            { id: doc.id, ...doc.data() },
          ];
          break;
        case "new":
          newDisneyMovies = [...newDisneyMovies, { id: doc.id, ...doc.data() }];
          break;
        case "original":
          originalMovies = [...originalMovies, { id: doc.id, ...doc.data() }];
          break;
        case "trending":
          trendingMovies = [...trendingMovies, { id: doc.id, ...doc.data() }];
          break;
      }
    });
    dispatch(
      setMovies({
        recommended: recommendedMovies,
        newToDisney: newDisneyMovies,
        original: originalMovies,
        trending: trendingMovies,
      })
    );
  };

  useEffect(() => {
    getDB();
  }, []);

  return (
    <div className="home">
      <ImgSlider />
      <Companies />
      <Movies />
    </div>
  );
};

export default Home;
