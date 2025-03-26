import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "CartSlice",
  initialState: {
    Items: [],
  },
  reducers: {
    addItems: (state, action) => {
      const existingItem = state.Items.find(
        (item) => item.id === action.payload.id
      );

      if (!existingItem) {
        state.Items.push({ ...action.payload, quantity: 1 });
      } else {
        existingItem.quantity += 1;
      }
    },
  },
});

export const { addItems } = cartSlice.actions;

export default cartSlice.reducer;
