import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { getUserActivity } from './userActivityThunks';
// import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
import { getAuthToken } from "../../util/handler";

const initialState = {
  activities: [],
  status: "idle",
  error: null,
};

export const getUserActivity = createAsyncThunk(
  "userActivityImage/getUserActivity",
  async (userId, { rejectWithValue }) => {
    try {
      const token = getAuthToken();
      const response = await axios.get(
        `http://localhost:8080/api/activities/${userId}/top3`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("response.data",response.data)
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const userActivityImageSlice = createSlice({
  name: "userActivityImage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserActivity.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUserActivity.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.activities = action.payload;
      })
      .addCase(getUserActivity.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default userActivityImageSlice.reducer;
