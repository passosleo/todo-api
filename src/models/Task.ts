import { Schema, model } from "mongoose";
import { ITask } from "../types";

const taskSchema = new Schema<ITask>(
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

const Task = model<ITask>("Task", taskSchema);

export default Task;
