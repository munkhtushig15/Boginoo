import express from "express";
import { user, users, createUser, deleteUser } from "../controller/user.js";

const userRouter = express.Router();

userRouter.route("/").get(users).post(createUser);
userRouter.route("/:id").get(user).delete(deleteUser);

export default userRouter;