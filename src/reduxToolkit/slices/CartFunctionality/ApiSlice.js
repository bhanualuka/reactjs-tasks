import { createSlice } from "@reduxjs/toolkit";

const ApiSlice = createSlice({
  name: "ApiSlice",
  initialState: {
    products: [],
    singleProduct: {},
  },

  reducers: {
    addApiProducts: (state, action) => {
      state.products = action.payload;
    },

    addSingleProduct: (state, action) => {
      state.singleProduct = { ...action.payload };
    },
  },
});

export const { addApiProducts, addSingleProduct } = ApiSlice.actions;
export default ApiSlice.reducer;
