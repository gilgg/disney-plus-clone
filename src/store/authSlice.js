import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  email: "",
  name: "",
  photo: "",
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.name = "";
      state.email = "";
      state.photo = "";
      state.isLoggedIn = false;
    },
  },
});

// export const authActions = authSlice.actions;
export default authSlice.reducer;

export const { login, logout } = authSlice.actions;

export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;
