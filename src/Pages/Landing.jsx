import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Codes from "../components/Codes";
import Sponsors from "../components/Sponsors";
import Prizes1 from "../components/Prizes1";
import Timeline from "../components/timeline";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Track from "../components/Track";
import Pastsponsors from "../components/Pastsponsors";

function Landing() {
  return (
    <div className="font-Clash w-screen text-[#f0f8ff] flex justify-center flex-col">
      <div className="bg-hero"></div>
      <Navbar />
      <Hero />
      <Codes />
      <About />
      <Track/>
      <Timeline />
      <Prizes1 />
      {/* <Sponsors /> */}
      <Pastsponsors/>
      <Faq/>
      <Footer/>
      
    </div>
  );
}

export default Landing;
