import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function NavModal({ setIsMobile }) {
  const modalRef = useRef();

  const clickHandler = (e) => {
    if (e.target !== modalRef.current) {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", clickHandler);

    return () => document.removeEventListener("click", clickHandler);
  }, [setIsMobile]);

  return (
    <div className="w-screen h-screen absolute top-0 left-0 md:hidden bg-black bg-opacity-40">
      <div>
        <ul
          ref={modalRef}
          className="mt-14 ms-14 w-40 flex justify-between items-center flex-col bg-[#071A45] text-white text-sm p-5 px-10 gap-5 rounded-sm"
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/property">Property</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <button className="border-2 py-3 px-6 rounded-3xl">SignUp</button>
          <button className="border-2 py-3 px-6 rounded-3xl bg-[#3A7DFF] text-white">
            SignIn
          </button>
        </ul>
      </div>
    </div>
  );
}
