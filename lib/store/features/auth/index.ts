import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import { type User } from "lib/models";
import { type AppState } from "../..";

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  expires: string | null;
}

export const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  expires: null,
};

export const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => {
      toast.error("You have been logged out");
      return initialState;
    },
    setSession: (state, action) => {
      state.user = action.payload.user;
      state.expires = action.payload.expires;
      state.isAuthenticated = true;
      toast.success("Successfully logged in!");
    },
  },
  extraReducers: (builder) => {},
});
export const { logout, setSession } = slice.actions;
export default slice.reducer;
export const authSelector = (state: AppState) => state.auth;
