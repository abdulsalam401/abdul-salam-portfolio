import React, { useState } from "react";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Wrapper from "./utils/Wrapper";
import Background from "./components/Background";
import CustomCursor from "./components/CustomCursor";

import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import CertificateDetails from "./components/CertificateDetails";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [openModal, setOpenModal] = useState({ state: false, project: null, type: "project" });
  return (
    <Background>
      <CustomCursor />
      <Navbar />
      <div className="w-full relative z-10">
        <section id="hero">
          <HeroSection />
        </section>
        <Wrapper>
          <section id="skills">
            <Skills />
          </section>

        </Wrapper>
        <section id="projects">
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
        </section>
        <Wrapper>
          <section id="education">
            <Education openModal={openModal} setOpenModal={setOpenModal} />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </Wrapper>
        <Footer />
        {openModal.state && openModal.type === "project" && (
          <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
        )}
        {openModal.state && openModal.type === "certificate" && (
          <CertificateDetails openModal={openModal} setOpenModal={setOpenModal} />
        )}
      </div>
    </Background>
  );
};

export default App;
