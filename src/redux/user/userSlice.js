import { createSlice } from "@reduxjs/toolkit";

// create the user slice to manage user state
const userSlice = createSlice({
  name: "user",
  initialState: {
    initialStateData: null,
    user: null,
    isAuthenticated: false,
  },
  reducers: {
    setInitialStateData: (state, action) => {
      state.initialStateData = action.payload;
      state.isAuthenticated = false;
    },
    clearInitialStateData: (state) => {
      state.initialStateData = null;
    },
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
  },
});

export const {
  setInitialStateData,
  clearInitialStateData,
  login,
  logout,
  updateUser,
} = userSlice.actions;
export default userSlice;
