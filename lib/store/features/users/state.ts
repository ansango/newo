import { Session } from "next-auth";

export interface UsersState {
  value: any | null;
  status: "idle" | "loading" | "failed";
}

export const initialState: UsersState = {
  value: null,
  status: "idle",
};
