import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";

// create store
const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default store;
