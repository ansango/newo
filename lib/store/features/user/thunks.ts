import { getSessionAuthService } from "@/api/services/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk("auth/getSession", async () => {
  const response = await getSessionAuthService();
  return response?.data;
});
