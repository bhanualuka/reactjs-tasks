import { createSlice } from "@reduxjs/toolkit";

const FakeApiSlice = createSlice({
  name: "FakeData",
  initialState: {
    Products: null,
    Search: "",
  },

  reducers: {
    AddProducts: (state, action) => {
      state.Products = action.payload;
    },
    AddSearch: (state, action) => {
      state.Search = action.payload;
    },
  },
});

export const { AddProducts, AddSearch } = FakeApiSlice.actions;
export default FakeApiSlice.reducer;
