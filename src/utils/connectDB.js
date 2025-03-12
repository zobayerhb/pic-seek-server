require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");

const client = new MongoClient(process.env.MONGO_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const db = client.db("ai-server-db");
const imageCollections = db.collection("images");

async function connectDB() {
  return client.connect();
}

module.exports = { connectDB, imageCollections };
