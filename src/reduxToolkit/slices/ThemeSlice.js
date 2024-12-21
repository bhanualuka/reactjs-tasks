import { createSlice } from "@reduxjs/toolkit";

const ThemeSlice = createSlice({
  name: "themeSlice",
  initialState: {
    themeChanger: false,
  },

  reducers: {
    toogeleThemeChanger: (state) => {
      state.themeChanger = !state.themeChanger;
    },
  },
});

export const { toogeleThemeChanger } = ThemeSlice.actions;

export default ThemeSlice.reducer;
