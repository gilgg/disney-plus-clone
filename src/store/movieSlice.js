import { createSlice } from "@reduxjs/toolkit";

const initialMovieState = {
  recommended: [],
  newToDisney: [],
  original: [],
  trending: [],
};

const movieSlice = createSlice({
  name: "movieSlice",
  initialState: initialMovieState,
  reducers: {
    setMovies(state, action) {
      state.recommended = action.payload.recommended;
      state.newToDisney = action.payload.newToDisney;
      state.original = action.payload.original;
      state.trending = action.payload.trending;
    },
  },
});

export default movieSlice.reducer;

export const { setMovies } = movieSlice.actions;
