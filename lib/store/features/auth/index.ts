import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import type { AppState } from "../../index";
import { initialState } from "./state";

import { getSession } from "./thunks";

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSession.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getSession.fulfilled, (state, action) => {
        state.value.session = action.payload;
        state.status = "idle";
      })
      .addCase(getSession.rejected, (state, action) => {
        state.status = "failed";
        toast.error(action.error.message || "Something went wrong");
      });
  },
});



export default authSlice.reducer;
