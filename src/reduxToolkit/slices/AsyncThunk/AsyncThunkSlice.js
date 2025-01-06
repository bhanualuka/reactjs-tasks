import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { data } from "react-router-dom";

const initialData = {
  products: [],
  status: "",
  error: false,
};

const FetchingData = createAsyncThunk("products/dresses", async () => {
  try {
    const repsonse = await fetch("");
    const json = await repsonse.json();
    return json;
  } catch (error) {
    throw error;
  }
});

const AsyncThunkSlice = createSlice({
  name: "AsyncThunkSlice",
  initialState: initialData,

  extraReducers: (builder) => {
    builder
      .addCase(FetchingData.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(FetchingData.fulfilled, (state, action) => {
        state.status = "Completed";
        state.data = action.payload;
      })
      .addCase(FetchingData.rejected, (state, action) => {
        state.status = "error";
      });
  },
});

export default AsyncThunkSlice.reducer;
