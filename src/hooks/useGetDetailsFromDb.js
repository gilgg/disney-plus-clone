import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const useGetDetailsFromDb = () => {
  const movieId = useParams();
  const [details, setDetails] = useState({});

  useEffect(async () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const moviesRef = collection(db, "movies");
    const moviesDocs = await getDocs(moviesRef);
    const movieDoc = moviesDocs.docs.find((doc) => doc.id === movieId.movieId);

    if (movieDoc) {
      setDetails(movieDoc.data());
    } else {
      console.error("No such document in firebase.");
    }
  }, [movieId]);

  return details;
};

export default useGetDetailsFromDb;
