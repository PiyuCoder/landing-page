import React from "react";

export default function Hero() {
  return (
    <div className=" w-full flex items-center justify-center flex-col gap-5">
      <h1 className=" text-4xl sm:text-7xl text-center font-extrabold text-[#071A45] font-lato">
        CONNECTING DREAMS TO REALITY <br />{" "}
        <span className=" text-[#2C8FB5] italic font-bold">YOUR PREMIER</span>{" "}
        <br />
        REAL ESTATE MARKETPLACE
      </h1>
      <p className="text-[#071A45] text-lg ">
        Where every search ends with a home
      </p>
      <div className=" flex flex-col md:flex-row md:gap-14 gap-3">
        <button className=" bg-[#3A7DFF] text-white text-center py-4 px-7 rounded-full text-lg">
          Find Your Home &#x1F852;
        </button>

        <button className=" bg-[#3A7DFF] text-white text-center py-4 px-7 rounded-full text-lg">
          List Your Property &#x1F852;
        </button>
      </div>
    </div>
  );
}
