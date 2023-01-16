import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./slices/studentSlice";

const rootReducers = {
  counter: counterReducer,
};

const store = configureStore({
  reducer: rootReducers,
});

export default store;
