import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  index: NaN,
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add(state, action) {
      state.todos.push(action.payload);
    },
    getUpdate(state, action) {
      state.index = action.payload;
    },
    saveUpdate(state, action) {
      state.todos[action.payload.index] = action.payload.todo;
      state.index = initialState.index;
    },
    closeUpdate(state, action) {
      state.index = initialState.index;
    },
    remove(state, action) {
      state.todos.splice(action.payload, 1);
    },
  },
});

const { reducer, actions } = todoSlice;

export const { add, getUpdate, saveUpdate, closeUpdate, remove } = actions;
export default reducer;
