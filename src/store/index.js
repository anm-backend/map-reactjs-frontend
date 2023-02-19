import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./slices/studentSlice";
import todoReducer from "./slices/todoSlice.js";

const rootReducers = {
  counter: counterReducer,
  todo: todoReducer,
};

const store = configureStore({
  reducer: rootReducers,
});

export default store;
