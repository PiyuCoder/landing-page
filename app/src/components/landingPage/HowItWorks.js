import React from "react";
import HowItWorksCard from "./HowItWorksCard";
import image1 from "../../assets/image 199.png";
import image2 from "../../assets/image 200.png";
import image3 from "../../assets/image 201.png";
import image4 from "../../assets/image 202.png";

const cardData = [
  {
    id: 1,
    image: image1,
    heading: "Discover Your Perfect Home",
    content:
      "Use our advanced filters to narrow down your search. Specify everything from location to amenities, ensuring you find the property that feels right.",
    alignment: "left",
    path: "#",
  },
  {
    id: 2,
    image: image2,
    heading: "Showcase Your Property",
    content:
      "List your property with ease. Fill in detailed forms to highlight every feature, attracting the perfect buyer directly.",
    alignment: "right",
    path: "#",
  },
  {
    id: 3,
    image: image3,
    heading: "Connect and Communicate",
    content:
      "Our platform facilitates direct communication between buyer and seller, making negotiations transparent and straightforward.",
    alignment: "left",
    path: "#",
  },

  {
    id: 4,
    image: image4,
    heading: "Seal the Deal Securely",
    content:
      "Advance payments made safe. Secure your agreement with confidence, and step closer to your dream property.",
    alignment: "right",
    path: "#",
  },
];

export default function HowItWorks() {
  return (
    <div className=" w-full flex flex-col items-center justify-center mt-12 p-5 md:p-20 ">
      <h1 className="text-5xl md:text-7xl text-center font-bold text-[#071A45] font-lato">
        HOW IT WORKS?
      </h1>
      <p>Step by Step Guide</p>
      {cardData.map((data) => (
        <HowItWorksCard key={data.id} data={data} />
      ))}
    </div>
  );
}
