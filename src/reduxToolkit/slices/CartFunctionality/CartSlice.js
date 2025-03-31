import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const cartSlice = createSlice({
  name: "CartSlice",
  initialState: {
    Items: [],
    finalPrice: 0,
  },
  reducers: {
    addItems: (state, action) => {
      const existingItem = state.Items.find(
        (item) => item.id === action.payload.id
      );

      if (!existingItem) {
        state.Items.push({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload.price,
        });
      } else {
        existingItem.quantity += 1;
        existingItem.totalPrice += existingItem.price;
      }
    },

    decrease: (state, action) => {
      const existingItem = state.Items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        existingItem.totalPrice -= action.payload.price;
      } else {
        state.Items = state.Items.filter((item) => item.id !== existingItem.id);
      }
    },

    removeItem: (state, action) => {
      const existingItem = state.Items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        state.Items = state.Items.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },

    FincalPrice: (state, action) => {
      const existingItem = state.Items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        state.finalPrice += existingItem.price;
      } else if (action.payload.type === "decrease") {
        state.finalPrice -= existingItem.price;
        if (state.finalPrice < 0) state.finalPrice = 0; // Prevent negative final price
      }
    },
  },
});

export const { addItems, decrease, removeItem, FincalPrice } =
  cartSlice.actions;

export default cartSlice.reducer;
