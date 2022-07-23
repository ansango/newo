import { createSlice } from "@reduxjs/toolkit";
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
      .addCase(getUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(getUser.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default userSlice.reducer;
