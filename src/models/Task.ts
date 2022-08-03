import { Schema, model } from "mongoose";
import { ITask } from "../types";

const brandSchema = new Schema<ITask>(
  {
    id: { type: String },
    title: { type: String, required: true },
    description: { type: String, required: true },
    done: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  },
  {
    versionKey: false,
  }
);

const Task = model<ITask>("tasks", brandSchema);

export default Task;
