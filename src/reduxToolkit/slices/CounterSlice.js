import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
  name: "counter",
  initialState: {
    Count: 0,
  },

  reducers: {
    addIncrement: (state) => {
      state.Count = state.Count + 1;
    },
    addDecrement: (state) => {
      state.Count = state.Count - 1;
    },
  },
});

export const { addDecrement, addIncrement } = CounterSlice.actions;
export default CounterSlice.reducer;
