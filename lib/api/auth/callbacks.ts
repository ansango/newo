import { type CallbacksOptions } from "next-auth";

const callbacks: Partial<CallbacksOptions> = {
  async signIn({ user, account, profile, email, credentials }) {
    return true;
  },
  async redirect({ url, baseUrl }) {
    return baseUrl;
  },
  async session({
    session,
    token,
    user,
  }: {
    session: any;
    token: any;
    user: any;
  }) {
    session.roles = user.roles;
    return session;
  },
  async jwt({ token, user, account, profile, isNewUser }) {
    return token;
  },
};

export default callbacks;
