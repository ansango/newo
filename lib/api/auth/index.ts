import { type SessionOptions } from "next-auth";
import providers from "./providers";

import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { getMongoClient } from "lib/api/middleware/db";

const adapter = MongoDBAdapter(getMongoClient());
const session: Partial<SessionOptions> = {
  strategy: "jwt",
  maxAge: 30 * 24 * 60 * 60,
};

export { providers, adapter, session };
