import { createSlice } from "@reduxjs/toolkit";
import { type Session } from "next-auth";
import toast from "react-hot-toast";
import type { AppState } from "../../index";
import { initialState } from "./state";

import { getUser } from "./thunks";

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.value = action.payload as Session;
        state.status = "idle";
      })
      .addCase(getUser.rejected, (state, action) => {
        state.status = "failed";
        toast.error(action.error.message || "Something went wrong");
      });
  },
});

export const selectUser = (state: AppState) => state.users;

export default userSlice.reducer;
