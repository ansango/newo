import { Session } from "next-auth";

export interface UserState {
  value: { session: Session | null };
  status: "idle" | "loading" | "failed";
  onSignIn: boolean;
  onSignOut: boolean;
}

export const initialState: UserState = {
  value: { session: null },
  status: "idle",
  onSignIn: false,
  onSignOut: false,
};
