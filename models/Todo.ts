// models/Todo.ts
import mongoose, { Schema, Document } from "mongoose";

export interface ITodo extends Document {
  userId: string; // Store userId as a string
  title: string;
  completed: boolean;
}

const TodoSchema = new Schema<ITodo>({
  userId: { type: String, required: true }, // Correctly set userId as a string
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

export default mongoose.models.Todo || mongoose.model<ITodo>("Todo", TodoSchema);
