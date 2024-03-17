import React from "react";
import TopSection from "./topsec/TopSection";
import AboutCompany from "./about-company/AboutCompany";
import Footer from "../footer/Footer";
import Tools from "./tools/Tools";
import Contact from "./contact/Contact";
import ProvidingService from "./providing-service/ProvidingService";
import "../../styles/tailwind.css";

const AboutHome = () => {
  return (
    <div className="tailwind">
      <TopSection />
      <AboutCompany />
      <Tools />
      <ProvidingService />
      <Contact />
      <Footer />
    </div>
  );
};

export default AboutHome;
