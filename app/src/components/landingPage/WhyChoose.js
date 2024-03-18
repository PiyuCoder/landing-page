import React from "react";
import line from "../../assets/Line 202.png";

const chooseData = [
  {
    heading: "Search and Filters",
    content:
      "Tailored Searches to meet your needs. Find what you’re looking for with precision.",
    mTop: 0,
  },
  {
    heading: "Detailed Listings ",
    content:
      "Every Detail Matters. Sellers can list, and buyers can explore properties that meet their exact specifications.",
    mTop: 32,
  },
  {
    heading: "Direct Messaging",
    content:
      "Seamless Communication. Connect directly with sellers or buyers to ask questions, negotiate, and make decisions.",
    mTop: 60,
  },
  {
    heading: "Secure Payments",
    content:
      "Trust in Every Transaction. Our secure payment system ensures your peace fo mind.",
    mTop: 12,
  },
];

export default function WhyChoose() {
  return (
    <div className=" min-h-screen flex items-center justify-center flex-col  bg-[#D6E9F0] font-lato p-10 py-14">
      <h1 className="text-4xl sm:text-7xl text-center font-bold text-[#071A45] font-lato">
        WHY CHOOSE XYZ?
      </h1>
      <div className="w-full min-h-96 flex flex-wrap items-center justify-around">
        {chooseData.map((data, i) => (
          <div className={`flex gap-4 sm:mt-${data.mTop}`} key={i}>
            <img className=" h-full" src={line} />
            <div className="text-[#071A45] w-44 flex justify-center flex-col">
              <p className="text-7xl font-light">0{i + 1}</p>
              <h2 className="font-bold uppercase text-lg">{data.heading}</h2>
              <div className="w-4 h-4 bg-[#2C8FB5] rounded-sm mt-5 mb-9"></div>
              <p className="text-xs">{data.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
