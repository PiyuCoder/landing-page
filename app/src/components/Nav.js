import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import NavModal from "./NavModal";
import { Link } from "react-router-dom";

export default function Nav() {
  const [isMobile, setIsMobile] = useState(false);

  const handleMenuClick = (e) => {
    e.stopPropagation();
    setIsMobile((prevState) => !prevState);
  };
  return (
    <nav className="flex justify-between items-center p-10 w-full font-lato relative">
      <div className="justify-between items-center p-10 w-full hidden md:flex">
        <h1 className=" text-[#071A45] font-extrabold text-5xl">
          XYZ <span className=" font-light italic">INDUSTRIES</span>
        </h1>
        <div>
          <ul className="flex justify-between items-center bg-[#071A45] text-white text-sm p-5 px-10 gap-5 rounded-full">
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>About Us</Link>
            </li>
            <li>
              <Link>Property</Link>
            </li>
            <li>
              <Link>Services</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-5">
          <button className=" border-2 py-3 px-6 rounded-3xl">Signup</button>
          <button className=" border-2 py-3 px-6  rounded-3xl bg-[#3A7DFF] text-white">
            Signin
          </button>
        </div>
      </div>

      <AiOutlineMenu
        onClick={handleMenuClick}
        className=" md:hidden"
        size={30}
        color="#071A45"
      />
      {isMobile && <NavModal setIsMobile={setIsMobile} />}
    </nav>
  );
}
