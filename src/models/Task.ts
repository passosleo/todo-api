import { Schema, model } from "mongoose";
import { ITask } from "../types";

const brandSchema = new Schema<ITask>(
  {
    id: { type: String },
    name: { type: String, required: true },
    done: { type: Boolean, default: false }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const Task = model<ITask>("tasks", brandSchema);

export default Task;
