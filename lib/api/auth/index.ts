import { NextAuthOptions, type SessionOptions } from "next-auth";
import { type Adapter } from "next-auth/adapters";

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

import providers from "./providers";
import callbacks from "./callbacks";
import events from "./events";

const adapter: Adapter = PrismaAdapter(new PrismaClient());

const session: Partial<SessionOptions> = {
  strategy: "database",
  maxAge: 30 * 24 * 60 * 60,
};

const options: NextAuthOptions = {
  providers,
  session,
  adapter,
  callbacks,
  events,
  pages: {
    signIn: "/signin",
  },
  secret: process.env.NEXTAUTH_SECRET,
  useSecureCookies: false,
  debug: true,
};

export { options };
