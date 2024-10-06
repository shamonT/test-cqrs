import mongoose from "mongoose";

const schema = new mongoose.Schema({
  bookName: { type: String, required: true, unique: true },
  emails: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model("BooksBorrowers", schema);
