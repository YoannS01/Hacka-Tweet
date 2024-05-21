import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstname: null,
  username: null,
  token: null,
};

export const usersSlice = createSlice({
  name: "users",

  initialState,
  reducers: {
    logUpUser: (state, action) => {
      state.firstname = action.payload.firstname;
      state.username = action.payload.username;
      state.token = action.payload.token;
    },

    logInUser: (state, action) => {
      state.username = action.payload.username;
      state.token = action.payload.token;
    },

    logoutUser: (state) => {
      state.firstname = null;
      state.username = null;
      state.token = null;
    },
  },
});

export const { logUpUser, logInUser, logoutUser } = usersSlice.actions;
export default usersSlice.reducer;
