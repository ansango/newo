import { Session } from "next-auth";

export interface AuthState {
  value: { session: Session | null };
  status: "idle" | "loading" | "failed";
  onSignIn: boolean;
  onSignOut: boolean;
}

export const initialState: AuthState = {
  value: { session: null },
  status: "idle",
  onSignIn: false,
  onSignOut: false,
};
