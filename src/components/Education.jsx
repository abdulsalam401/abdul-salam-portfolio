import { useState } from "react";
import { education, certifications } from "../data/constants";
import EducationCard from "./EducationCard";
import CertificateCard from "./CertificateCard";
import CertificateDeck from "./CertificateDeck";
import { motion, AnimatePresence } from "motion/react";
import PropTypes from "prop-types";
import {
  HiOutlineViewGrid,
  HiOutlineCollection,
} from "react-icons/hi";

const Education = ({ setOpenModal }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isMobileViewAll, setIsMobileViewAll] = useState(false);

  const categories = [
    { id: "all", label: "All" },
    { id: "Cybersecurity", label: "Cybersecurity" },
    { id: "Networking", label: "Networking" },
    { id: "Programming", label: "Programming" },
    { id: "AI & Tools", label: "AI & Tools" },
  ];

  const filteredCertificates =
    selectedCategory === "all"
      ? certifications
      : certifications.filter((cert) => cert.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div id="education" className="flex flex-col justify-center items-center relative z-1 pb-10 px-0 md:pb-[80px]">
      <div className="flex flex-col justify-between items-center w-full max-w-[1350px] pt-10 gap-3">
        <motion.span
          className="font-mono text-sm md:text-base uppercase tracking-[0.35em] text-neon-purple mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {"// 03. education"}
        </motion.span>

        <motion.h1
          className="text-[35px] text-center font-bold mt-3 md:mt-6 md:text-[45px] text-white text-glow-purple"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h1>

        <motion.p
          className="text-center text-sm md:text-base text-gray-400 max-w-[650px] mb-6 px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Academic foundation and specialized cybersecurity coursework
        </motion.p>

        <motion.div
          className="w-full max-w-[1000px] mt-[10px] flex flex-col items-center justify-center gap-3 px-4 sm:px-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <ol className="relative w-full border-l-2 border-neon-purple/40 pl-6 flex flex-col gap-8">
            {education.map((edu, index) => (
              <li key={index} className="relative">
                <span
                  className="absolute -left-[31px] top-6 w-4 h-4 rounded-full border-2 border-neon-purple bg-darkTheme-bg shadow-[0_0_12px_rgba(188,19,254,0.6)]"
                  aria-hidden="true"
                ></span>
                <motion.div variants={itemVariants}>
                  <EducationCard education={edu} />
                </motion.div>
              </li>
            ))}
          </ol>
        </motion.div>

        {certifications && certifications.length > 0 && (
          <div className="flex flex-col justify-between items-center w-full max-w-[1350px] pt-24 gap-3 px-2 sm:px-4">
            <motion.span
              className="font-mono text-sm md:text-base uppercase tracking-[0.35em] text-neon-cyan mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {"// 03.1 certifications"}
            </motion.span>

            <motion.h1
              className="text-[26px] sm:text-[32px] md:text-[45px] text-center font-bold mt-1 md:text-[45px] text-white text-glow-cyan leading-tight"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              Licenses & Certifications
            </motion.h1>

            <motion.p
              className="text-center text-xs sm:text-sm md:text-base text-gray-400 max-w-[550px] mb-3 px-4 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Verified credentials from industry leaders including Google, Cisco, and Red Team Leaders
            </motion.p>

            {/* Category Filter Tabs with Integrated Mobile View Toggle */}
            <div className="flex flex-wrap justify-center items-center gap-1.5 sm:gap-2.5 my-1 px-2 max-w-2xl">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[11px] sm:text-xs md:text-sm font-medium transition-all duration-300 cursor-pointer ${
                    selectedCategory === cat.id
                      ? "bg-neon-cyan/20 text-neon-cyan border border-neon-cyan shadow-[0_0_12px_rgba(0,243,255,0.35)]"
                      : "bg-white/5 text-gray-400 border border-white/10 hover:text-white hover:border-white/25"
                  }`}
                >
                  {cat.label}
                </button>
              ))}

              {/* Mobile View Toggle integrated seamlessly */}
              <button
                onClick={() => setIsMobileViewAll(!isMobileViewAll)}
                className="md:hidden flex items-center gap-1 px-3 py-1 rounded-full bg-neon-purple/20 border border-neon-purple/50 text-white font-medium text-[11px] transition-all cursor-pointer shadow-[0_0_10px_rgba(188,19,254,0.3)]"
              >
                {isMobileViewAll ? (
                  <>
                    <HiOutlineCollection className="w-3.5 h-3.5 text-neon-cyan" />
                    <span>Swipe</span>
                  </>
                ) : (
                  <>
                    <HiOutlineViewGrid className="w-3.5 h-3.5 text-neon-cyan" />
                    <span>Grid View</span>
                  </>
                )}
              </button>
            </div>

            {/* 1. Mobile Experience (Screens < md) */}
            <div className="w-full md:hidden">
              {!isMobileViewAll ? (
                /* 3D Stacked Deck Mode */
                <CertificateDeck
                  certificates={filteredCertificates}
                  setOpenModal={setOpenModal}
                />
              ) : (
                /* "View All" Grid Mode */
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="w-full flex flex-col gap-5 px-3 py-2"
                >
                  {filteredCertificates.map((cert) => (
                    <div key={cert.id} className="w-full">
                      <CertificateCard cert={cert} setOpenModal={setOpenModal} />
                    </div>
                  ))}
                </motion.div>
              )}
            </div>

            {/* 2. Desktop/Tablet Multi-Column Grid (Screens >= md) */}
            <div className="hidden md:block w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCategory}
                  className="w-full mt-6 grid grid-cols-2 lg:grid-cols-3 gap-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {filteredCertificates.map((cert) => (
                    <motion.div key={cert.id} variants={itemVariants} className="h-full">
                      <CertificateCard cert={cert} setOpenModal={setOpenModal} />
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Education;

Education.propTypes = {
  setOpenModal: PropTypes.func,
};
