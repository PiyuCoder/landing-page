import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { fileURLToPath } from "url";
import { join, dirname } from "path";
import { connectDb } from "./db/db.js";
import subscriberRoute from "./routes/subscriber.js";

dotenv.config();
connectDb();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use("/", express.static("build"));

app.use(cors());
app.use(express.json());

app.use("/api", subscriberRoute);

app.get("/*", (req, res) => {
  res.sendFile(join(__dirname, "./build", "index.html"));
});

app.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}`)
);
