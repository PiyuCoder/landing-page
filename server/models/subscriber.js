import mongoose from "mongoose";

const subscriberSchema = new mongoose.Schema({
  email: String,
});

export const Subscriber = new mongoose.model("Subscriber", subscriberSchema);
