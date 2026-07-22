import { MongoClient } from 'mongodb'

let clientPromise

const getClient = () => {
  const uri = process.env.MONGO_URI

  if (!uri) {
    throw new Error('MongoDB is not configured')
  }

  if (!clientPromise) {
    clientPromise = new MongoClient(uri, {
      maxPoolSize: 5,
      serverSelectionTimeoutMS: 5_000,
    }).connect().catch((error) => {
      clientPromise = undefined
      throw error
    })
  }

  return clientPromise
}

export const getCollection = async (name) => {
  const client = await getClient()
  const databaseName = process.env.MONGO_DB_NAME || 'db'

  return client.db(databaseName).collection(name)
}
