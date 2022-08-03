import mongoose, { Connection } from "mongoose";

const url: string = process.env.DB_URL ?? 'mongodb://localhost:27017/todo'

mongoose.connect(url);

const db: Connection = mongoose.connection;

export default db;