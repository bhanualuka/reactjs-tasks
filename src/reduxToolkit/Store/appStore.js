import ThemeReducer from "../slices/ThemeSlice";
import { configureStore } from "@reduxjs/toolkit";
import FakeReducer from "../slices/FakeApiSlice";
import CounterReducer from "../slices/CounterSlice";
import TodoReducer from "../slices/TodoSlice";
import InputApiReducer from "../slices/InputSlice";

const appStore = configureStore({
  reducer: {
    theme: ThemeReducer,
    fakeData: FakeReducer,
    counter: CounterReducer,
    Todo: TodoReducer,
    InputApi: InputApiReducer,
  },
});

export default appStore;
