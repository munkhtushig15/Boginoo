import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./router/user.js";
import linkRouter from "./router/link.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/users", userRouter);
app.use("/links", linkRouter);

const uri = process.env.MONGO_DB || "";
const port = process.env.PORT || 1000;

const connect = () => {
  try {
    mongoose.connect(uri, {}).then(() => {
      console.log("Connected to Mongo_DB");
    });
  } catch (err) {
    console.log("Error connecting to MongoDB");
    process.exit(1);
  }
};

app.listen(port, async () => {
  connect();
  console.log(`Server running ${port}`);
});
