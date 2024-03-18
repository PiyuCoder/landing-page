import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDb } from "./db/db.js";
import subscriberRoute from "./routes/subscriber.js";

dotenv.config();
connectDb();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", subscriberRoute);

app.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}`)
);
