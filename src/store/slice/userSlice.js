import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false,
  user: null,
  userToken: null,
  adhaarFront: null,
  adhaarBack: null,
  panCard: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUserToken: (state, action) => {
      state.userToken = action.payload;
    },
    setAdhaarFront: (state, action) => {
      state.adhaarFront = action.payload;
    },
    setAdhaarBack: (state, action) => {
      state.adhaarFront = action.payload;
    },
    setPanCard: (state, action) => {
      state.adhaarFront = action.payload;
    },
  },
});

export const {
  setLoggedIn,
  setUser,
  setUserToken,
  setAdhaarFront,
  setAdhaarBack,
  setPanCard,
} = userSlice.actions;

export default userSlice.reducer;
