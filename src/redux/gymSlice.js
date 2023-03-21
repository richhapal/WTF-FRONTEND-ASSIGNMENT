import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     gymList: [],
};

export const gymSlice = createSlice({
     name: "counter",
     initialState,
     reducers: {
          updateGymList: (state, payload) => {
               state.gymList = payload.payload;
          },
     },
});

export const gymActions = gymSlice.actions;

export default gymSlice.reducer;
