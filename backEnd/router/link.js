import express from "express";
import { links, createLink, getLinkById } from "../controller/link.js";

const linkRouter = express.Router();

linkRouter.route("/").get(links).post(createLink);

linkRouter.route("/:id").get(getLinkById);

export default linkRouter;