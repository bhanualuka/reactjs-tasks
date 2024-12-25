import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    search: "",
  },

  reducers: {
    addSearch: (state, action) => {
      state.search = action.payload;
    },
    addTodo: (state, action) => {
      state.todos = [...state.todos, state.search];
    },

    DeleteTodo: (state, action) => {
      state.todos = state.todos.filter(
        (item, index) => index !== action.payload
      );
    },
  },
});

export const { addTodo, addSearch, DeleteTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
