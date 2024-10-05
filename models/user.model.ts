import mongoose, { Schema, Document } from "mongoose";

export interface User extends Document {
  name: string;
  email: string;
  role: string;
  avatar: string;
  eventsRegistered: string[];
  createdAt: Date;
  updatedAt: Date;
}
const UserSchema: Schema<User> = new Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    role: {
      type: String,
      default: "User",
      enum: ["User", "Admin", "EventManager"],
    },
    avatar: { type: String },
    eventsRegistered: [{ type: Schema.Types.ObjectId, ref: "Event" }],
  },
  { timestamps: true }
);

export const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchema);
