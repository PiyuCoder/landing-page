import React from "react";
import Hero from "../components/landingPage/Hero";
import DisplayImage from "../components/landingPage/DisplayImage";
import HowItWorks from "../components/landingPage/HowItWorks";
import WhyChoose from "../components/landingPage/WhyChoose";
import TrustedPartner from "../components/landingPage/TrustedPartner";
import Footer from "../components/landingPage/Footer";

export default function LandingPage() {
  return (
    <div>
      <Hero />
      <DisplayImage />
      <HowItWorks />
      <WhyChoose />
      <TrustedPartner />
      <Footer />
    </div>
  );
}
