import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { setMovies } from "../store/movieSlice";

const useGetMoviesFromDb = () => {
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
    window.scrollTo({ top: 0, behavior: "smooth" });
    getDB();
  }, []);
};

export default useGetMoviesFromDb;
