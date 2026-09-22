import { useState, lazy, Suspense } from "react";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Wrapper from "./utils/Wrapper";
import Background from "./components/Background";

import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppMe from "./components/WhatsAppMe";

const ProjectDetails = lazy(() => import("./components/ProjectDetails"));
const CertificateDetails = lazy(() => import("./components/CertificateDetails"));

const App = () => {
  const [openModal, setOpenModal] = useState({ state: false, project: null, type: "project" });
  return (
    <Background>
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
          <Projects setOpenModal={setOpenModal} />
        </section>
        <Wrapper>
          <section id="education">
            <Education setOpenModal={setOpenModal} />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </Wrapper>
        <Footer />
        <Suspense fallback={null}>
          {openModal.state && openModal.type === "project" && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
          {openModal.state && openModal.type === "certificate" && (
            <CertificateDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </Suspense>
      </div>
      <WhatsAppMe />
    </Background>
  );
};

export default App;
