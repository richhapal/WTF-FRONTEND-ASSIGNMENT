import { configureStore } from "@reduxjs/toolkit";
import gymSlice from "./gymSlice";

export const store = configureStore({
     reducer: {
          gymReducer: gymSlice,
     },
});
