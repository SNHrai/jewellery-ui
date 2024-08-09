import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getAuthToken } from "../../util/handler";


const initialState = {
  userActivity: {
    userId: "",
    imageUrls: [],
    promptDescription: "",
  },
  loading:false,
  error: "",
};


export const saveUserActivity = createAsyncThunk(
  'userActivity/saveUserActivity',
  async (activityData, { rejectWithValue }) => {
    try {
      const token = getAuthToken();
      const response = await axios.post(
        'http://localhost:8080/api/activities/save',
        {
          userId: activityData.userId,
          imageUrls: activityData.imageUrls,
          promptDescription: activityData.promptDescription
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


  




const userActivitySlice = createSlice({
  name: "userActivity",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(saveUserActivity.pending, (state) => {
        state.status = "loading";
      })
      .addCase(saveUserActivity.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userActivity = action.payload;
        state.error = "";
      })
      .addCase(saveUserActivity.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "An error occurred";
      });
  },
});

export default userActivitySlice.reducer;
