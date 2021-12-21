import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./useSlide";
import postReducer from "./postSlice";

export default configureStore({
  reducer: {
    // reducer
    user: useReducer,
    post: postReducer,
  },
});
