import ThemeReducer from "../slices/ThemeSlice";
import { configureStore } from "@reduxjs/toolkit";
import FakeReducer from "../slices/FakeApiSlice";

const appStore = configureStore({
  reducer: {
    theme: ThemeReducer,
    fakeData: FakeReducer,
  },
});

export default appStore;
