import { Subscriber } from "../models/subscriber.js";

export const subscriberController = async (req, res) => {
  try {
    const { email } = req.body;

    const existing = await Subscriber.findOne({ email });

    if (existing) {
      return res
        .status(400)
        .json({ success: false, message: "Already has the subscription!" });
    }

    const newSubscriber = await new Subscriber({ email }).save();

    return res
      .status(200)
      .json({ success: true, message: "Subscribed successfully!" });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
