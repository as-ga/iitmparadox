import mongoose, { Schema, Document } from "mongoose";
export interface Event extends Document {
  title: string;
  image: string;
  details: string;
  eventType: string;
  date: Date;
  venu: string;
  summaary1: string;
  summaary2: string;
}

const EventSchema = new Schema({
  title: {
    type: String,
    required: { value: true, message: "Title is required" },
  },
  image: { type: String, required: true },
  details: { type: String, required: true },
  eventType: { type: String, required: true },
  date: { type: Date },
  venu: { type: String },
  summaary1: { type: String, default: "" },
  summaary2: { type: String, default: "" },
});

export const EventModel =
  (mongoose.models.Event as mongoose.Model<Event>) ||
  mongoose.model<Event>("Event", EventSchema);
