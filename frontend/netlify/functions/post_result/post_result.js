const { MongoClient } = require("mongodb");
require('dotenv').config();

const mongoClient = new MongoClient(process.env.MONGODB_URI,  { useNewUrlParser: true });

const cliecntPromise = mongoClient.connect((error, client) => {
  if(error){
    return console.log("Unable to connect to database")
  }
  console.log("Connected correctly")
});

const handler = async (event) => {
  try {
    const database = (await cliecntPromise).db("db");
    const collection = database.collection("game");
    const result = await collection.insertOne(JSON.parse(event.body));
    return {
      statusCode: 200,
      body: JSON.stringify(result),
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
}

module.exports = { handler };