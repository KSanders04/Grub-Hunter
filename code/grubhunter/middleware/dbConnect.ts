import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

const dbConnect = async () => {
  if (!MONGO_URI) {
    throw new Error("Please define the MONGO_URI environment variable");
  }

  if (global.mongoose?.conn) {
    return global.mongoose.conn;
  }

  if (!global.mongoose) {
    global.mongoose = { conn: null, promise: null };
  }

  if (!global.mongoose.promise) {
    global.mongoose.promise = mongoose.connect(MONGO_URI).then((mongoose) => {
      return mongoose;
    });
  }

  global.mongoose.conn = await global.mongoose.promise;
  return global.mongoose.conn;
};

export default dbConnect;
