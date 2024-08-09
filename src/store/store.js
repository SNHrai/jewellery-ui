import { configureStore } from "@reduxjs/toolkit";
import userActivitySlice from "../app/activity/userActivitySlice";
import userActivityImageSlice from "../app/activity/userActivityImageSlice";


const store = configureStore({
  reducer: {
    userActivity: userActivitySlice,
    userActivityImage: userActivityImageSlice
  },
});

export default store;
