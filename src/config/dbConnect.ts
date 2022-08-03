import mongoose, { Connection } from "mongoose";

mongoose.connect("mongodb://localhost:27017/todo");

const db: Connection = mongoose.connection;

export default db;