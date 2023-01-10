import express from "express";
import { users, create, getUserById } from "../controller/user.js";

const userRouter = express.Router();

userRouter.route("/").get(users).post(create);

userRouter.route("/:id").get(getUserById);

export default userRouter;
