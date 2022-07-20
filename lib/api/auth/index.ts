import { NextAuthOptions, type SessionOptions } from "next-auth";
import { type Adapter } from "next-auth/adapters";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { getMongoClient } from "lib/api/middleware/db";

import providers from "./providers";
import callbacks from "./callbacks";
import events from "./events";

const adapter: Adapter = MongoDBAdapter(getMongoClient());

const session: Partial<SessionOptions> = {
  strategy: "jwt",
  maxAge: 30 * 24 * 60 * 60,
};

const options: NextAuthOptions = {
  providers,
  session,
  adapter,
  callbacks,
  events,
  secret: process.env.NEXTAUTH_SECRET,
  useSecureCookies: false,
  debug: true,
};

export { options };
