import mongoose from "mongoose";
import { nanoid } from "nanoid";

const LinkSchema = new mongoose.Schema({
  url: String,
  id: String,
  shortId: String,
});

LinkSchema.pre("save", function (next) {
  this.shortId = nanoid(5);
  next();
});

const Link = mongoose.model("Link", LinkSchema);

export default Link;
