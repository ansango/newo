import { SessionOptions } from "next-auth";

export const session: Partial<SessionOptions> = {
  strategy: "jwt",
  maxAge: 30 * 24 * 60 * 60,
};
