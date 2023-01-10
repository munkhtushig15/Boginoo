import mongoose from "mongoose";
import { nanoid } from "nanoid";

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  shortId: String,
});

const User = mongoose.model("User", UserSchema);

export default User;
