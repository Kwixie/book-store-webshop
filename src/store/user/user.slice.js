import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  currentUser: null,
  usersFavourites: [],
  userDocRef: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
    setUsersFavourites(state, action) {
      state.usersFavourites = action.payload;
    },
    setUserDocRef(state, action) {
      state.userDocRef = action.payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;
export const { setUsersFavourites } = userSlice.actions;
export const { setUserDocRef } = userSlice.actions;
export const userReducer = userSlice.reducer;
