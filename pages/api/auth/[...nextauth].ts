import type { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import { providers, adapter, session } from "lib/api/auth";

const auth = async (req: NextApiRequest, res: NextApiResponse) => {
  return await NextAuth(req, res, {
    providers,
    adapter,
    session,
    callbacks: {
      async signIn({ user, account, profile, email, credentials }) {
        return true;
      },
      async redirect({ url, baseUrl }) {
        return baseUrl;
      },
      async session({ session, token, user }) {
        return session;
      },
      async jwt({ token, user, account, profile, isNewUser }) {
        return token;
      },
    },
    events: {
      async signIn({}) {
        /* on successful sign in */
      },
      async signOut({}) {
        /* on signout */
      },
      async createUser({}) {
        /* user created */
      },
      async updateUser({}) {
        /* user updated - e.g. their email was verified */
      },
      async linkAccount({}) {
        /* account (e.g. Twitter) linked to a user */
      },
      async session({}) {
        /* session is active */
      },
    },
    useSecureCookies: false,
    debug: true,
  });
};
export default auth;
