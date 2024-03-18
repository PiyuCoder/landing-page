import React, { useState } from "react";
import { AiFillYoutube } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { subscribeApi } from "../../axios/axios";

export default function Footer() {
  const [subsEmail, setSubsEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const subscribeClickHandler = async (e) => {
    setIsProcessing(true);
    if (subsEmail) {
      const res = await subscribeApi(subsEmail);
      setSubsEmail("");
      setMsg(res.data.message);
      setIsProcessing(false);
    } else {
      setMsg("Enter correct email");
      setIsProcessing(false);
    }
  };
  return (
    <div className=" flex flex-col items-center justify-center bg-[hsl(222,82%,15%)]  w-full mt-32 h-auto p-20 text-white ">
      <div className=" w-full flex  justify-evenly flex-wrap gap-5   font-lato">
        <div className="">
          <h1 className=" text-4xl font-bold mb-8">
            XYZ <i className=" font-light">INDUSTRIES</i>
          </h1>
          <p className=" w-80 font-light text-[#C9C6C2] mb-10">
            XYZ Industries: Where real estate dreams meet seamless transactions,
            transforming aspirations into achievements.
          </p>
          <button className=" border-2 py-3 px-6 rounded-full text-lg">
            EXPLORE <span className=" ms-4">&#x1F852;</span>
          </button>
        </div>

        <div>
          <h1 className=" text-xl mb-6">Quick Links</h1>
          <ul className="font-light text-[#C9C6C2]">
            <li>About Us</li>
            <li>Blog</li>
            <li>Testimonials</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Site Map</li>
          </ul>
        </div>

        <div>
          <h1 className=" text-xl mb-6">Customer Support</h1>
          <ul className="  font-light text-[#C9C6C2]">
            <li>Feedback</li>
            <li>Report a Problem</li>
            <li>Request a Call Back</li>
          </ul>
        </div>

        <div>
          <h1 className=" text-xl mb-6">Subscribe Us</h1>
          <p className="  font-light text-[#C9C6C2] mb-2">
            Subscribe to our weekly newsletter
          </p>
          <input
            type="email"
            value={subsEmail}
            onChange={(e) => setSubsEmail(e.target.value)}
            className=" w-full p-2 rounded-lg mb-2 text-black"
            placeholder="Email Id"
          />
          <button
            onClick={subscribeClickHandler}
            className={` w-full   p-2 px-6 rounded-lg text-white ${
              isProcessing ? " bg-slate-400" : "bg-[#3A7DFF]"
            } `}
          >
            Subscribe
          </button>
          <p>{msg}</p>
        </div>
      </div>
      <hr className=" h-1 w-full mt-16" />
      <div className=" w-full flex justify-between mt-6 items-center flex-wrap">
        <div className=" flex gap-4">
          <AiFillYoutube size={20} />
          <FaTwitter size={20} />
          <FaInstagram size={20} />
          <FaFacebook size={20} />
        </div>
        <div className=" flex gap-7 items-center">
          <p>Terms | Privacy</p>
          <p>&copy;2024 XYZ</p>
        </div>
      </div>
    </div>
  );
}
