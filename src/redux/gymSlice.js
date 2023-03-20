import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     value: 0,
};

export const gymSlice = createSlice({
     name: "counter",
     initialState,
     reducers: {
          decrement: (state) => {
               state.value -= 1;
          },
     },
});

export const gymActions = gymSlice.actions;

export default gymSlice.reducer;
