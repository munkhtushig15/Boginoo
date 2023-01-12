import express from "express";
import { links, createLink, getLinkById, deleteLink } from "../controller/link.js";

const linkRouter = express.Router();

linkRouter.route("/").get(links).post(createLink);
linkRouter.route("/:id").get(getLinkById).delete(deleteLink);

export default linkRouter;