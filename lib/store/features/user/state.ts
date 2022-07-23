import { Session } from "next-auth";

export interface UserState {
  value: Session | null;
  status: "idle" | "loading" | "failed";
}

export const initialState: UserState = {
  value: null,
  status: "idle",
};
