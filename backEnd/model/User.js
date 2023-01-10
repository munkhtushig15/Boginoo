import mongoose from "mongoose";
import { nanoid } from "nanoid";
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    required: true,
  },
  shortId: String,
});

const User = mongoose.model("User", UserSchema);
UserSchema.pre("save", function (next) {
  this.shortId = nanoid(5);
  next();
});
export default User;
