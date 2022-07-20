import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { getMongoClient } from "lib/api/middleware/db";

export const adapter = MongoDBAdapter(getMongoClient());
