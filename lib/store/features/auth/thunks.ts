import { getSessionAuthService } from "@/api/services/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getSession = createAsyncThunk("auth/getSession", async () => {
  const response = await getSessionAuthService();
  return response;
});
