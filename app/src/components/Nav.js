import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

export default function Nav() {
  return (
    <nav className="flex justify-between items-center p-10 w-full font-lato">
      <div className="justify-between items-center p-10 w-full hidden md:flex">
        <h1 className=" text-[#071A45] font-extrabold text-5xl">
          XYZ <span className=" font-light italic">INDUSTRIES</span>
        </h1>
        <div>
          <ul className="flex justify-between items-center bg-[#071A45] text-white text-sm p-5 px-10 gap-5 rounded-full">
            <li>Home</li>
            <li>About Us</li>
            <li>Property</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex gap-5">
          <button className=" border-2 py-3 px-6 rounded-3xl">Sign Up</button>
          <button className=" border-2 py-3 px-6  rounded-3xl bg-[#3A7DFF] text-white">
            Sign In
          </button>
        </div>
      </div>

      <AiOutlineMenu className=" md:hidden" size={30} color="#071A45" />
    </nav>
  );
}
