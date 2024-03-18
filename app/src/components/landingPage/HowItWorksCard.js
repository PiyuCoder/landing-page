import React from "react";
import demo from "../../assets/image 199.png";
import { Link } from "react-router-dom";

export default function HowItWorksCard({ data }) {
  return (
    <div
      className={`w-full flex mt-10 justify-center ${
        data.alignment === "right" ? "sm:justify-end" : "sm:justify-start"
      }`}
    >
      <div
        className={` ${
          data.alignment === "right" ? " sm:flex-row-reverse" : "sm:flex-row"
        }  flex items-center justify-center flex-col gap-2  md:gap-10 lg:px-32`}
      >
        <img className=" h-28 sm:h-auto" src={data.image} />
        <div
          className={`md:w-96 flex flex-col gap-3 ${
            data.alignment === "right" ? "items-end" : "items-start"
          }`}
        >
          <h2 className=" font-bold text-3xl font-lato text-[#071A45]">
            {data.heading}
          </h2>
          <p className=" text-sm text-[#071a45af] font-lato">{data.content}</p>
          <Link className=" underline text-[#071a45af]">Learn more</Link>
        </div>
      </div>
    </div>
  );
}
