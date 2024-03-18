import React from "react";
import bg from "../../assets/Group 110165.png";

export default function TrustedPartner() {
  return (
    <div className=" w-full mt-32">
      <div className=" relative">
        <img className=" w-full" src={bg} />
        <div className=" absolute text-center top-5 md:top-32 w-full md:px-32 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-7xl text-center font-extrabold text-[#071A45] font-lato">
            YOUR <i className=" font-normal">TRUSTED</i> PARTNER IN THE FUTURE
            <i className=" font-normal">OF HOUSING</i>
          </h1>
          <p className=" mt-9 text-[#071A45] font-lato text-lg sm:w-1/2">
            Our partnerships with governments and local banks ensure that our
            housing prices are affordable enough for our target market.
          </p>
          <button className=" bg-[#3A7DFF] mt-11 p-3 px-6 rounded-full text-white sm:text-lg">
            Join Our Community Today
          </button>
        </div>
      </div>
    </div>
  );
}
