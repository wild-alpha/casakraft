import React from "react";
import Navbar from "../Componenets/Navbar";
import Hero from "./Components/Hero";
import WhatsAppButton from "../Componenets/WhatsAppButton";
import CallButton from "../Componenets/CallButton";
import ApId from "./Components/ApId";
import DesignV from "./Components/DesignV";
import DProjects from "./Components/DProjects";
import Footer from "../Componenets/Footer";

export default function Home() {
  return (
    <>

   
      <div className="relative flex flex-col min-h-screen bg-[#121212]">
        <Navbar />
        <Hero />
        <WhatsAppButton />
        <CallButton />
        <ApId />
        <DesignV />
        <DProjects />
        <Footer />
      </div>
    </>
  );
}
