import fetcher from "@/utils/fetcher";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk("user/getUser", async () => {
  const response = await fetcher("/api/user");
  return response.user;
});
