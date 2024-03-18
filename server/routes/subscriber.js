import express from "express";
import { subscriberController } from "../controllers/subscriberController.js";

const router = express.Router();

router.post("/subscriber", subscriberController);

export default router;
