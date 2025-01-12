import { createSlice } from "@reduxjs/toolkit";

const InputSlice = createSlice({
  name: "inputSlice",
  initialState: {
    product: "",
    search: "",
    id: "1",
  },

  reducers: {
    updateProduct: (state, action) => {
      state.product = action.payload;
    },

    updateSearch: (state, action) => {
      state.search = action.payload;
    },

    updateId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { updateProduct, updateSearch, updateId } = InputSlice.actions;
export default InputSlice.reducer;
