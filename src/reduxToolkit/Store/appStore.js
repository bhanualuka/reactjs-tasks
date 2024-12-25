import ThemeReducer from "../slices/ThemeSlice";
import { configureStore } from "@reduxjs/toolkit";
import FakeReducer from "../slices/FakeApiSlice";
import CounterReducer from "../slices/CounterSlice";

const appStore = configureStore({
  reducer: {
    theme: ThemeReducer,
    fakeData: FakeReducer,
    counter:CounterReducer
  },
});

export default appStore;
