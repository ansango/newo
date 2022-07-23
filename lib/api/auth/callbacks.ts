import { type CallbacksOptions } from "next-auth";

const callbacks: Partial<CallbacksOptions> = {
  async signIn({ user, account, profile, email, credentials }) {
    return true;
  },
  async redirect({ url, baseUrl }) {
    return baseUrl;
  },
  async session({ session, user }: { session: any; user: any }) {
    session.user.roles = user.roles;
    return session;
  },
  async jwt({ token, user, account, profile, isNewUser }) {
    return token;
  },
};

export default callbacks;
