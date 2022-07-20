import { MongoClient, type Db } from "mongodb";

const { MONGODB_URI } = process.env;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined");
}

const uri = MONGODB_URI;

global.mongo = global.mongo || {};

let indexesCreated = false;

const createIndexes = async (db: Db) => {
  await Promise.all([
    db.collection("test").createIndex({ name: 1 }, { unique: true }),
  ]);
  indexesCreated = true;
};

const getMongoClient = async (): Promise<MongoClient> => {
  if (!global.mongo.client) {
    global.mongo.client = new MongoClient(uri);
  }
  await global.mongo.client.connect();
  return global.mongo.client;
};

const database = async (req: any, res: any, next: any) => {
  if (!global.mongo.client) {
    global.mongo.client = new MongoClient(uri);
  }
  req.dbClient = await getMongoClient();
  req.db = req.dbClient.db(); // this use the database specified in the MONGODB_URI (after the "/")
  if (!indexesCreated) await createIndexes(req.db);
  return next();
};

export { getMongoClient, database };
