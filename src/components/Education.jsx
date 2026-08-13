import { education, certifications } from "../data/constants";
import EducationCard from "./EducationCard";
import { motion } from "motion/react";
import PropTypes from "prop-types";

const Education = ({ setOpenModal }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div id="education" className="flex flex-col justify-center items-center relative z-1 pb-10 px-0 md:pb-[80px]">
      <div className="flex flex-col justify-between items-center w-full max-w-[1350px] pt-10 gap-3">

        <motion.h1
          className="text-[35px] text-center font-bold mt-3 md:mt-10 md:text-[45px] text-white text-glow-purple"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h1>

        <motion.div
          className="w-full max-w-[1000px] mt-[10px] flex flex-col items-center justify-center gap-3"
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
          <div className="flex flex-col justify-between items-center w-full max-w-[1350px] pt-20 gap-3">
            <motion.h1
              className="text-[35px] text-center font-bold mt-3 md:mt-5 md:text-[45px] text-white text-glow-cyan"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              Certifications
            </motion.h1>
            <motion.div
              className="w-full mt-[10px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {certifications.map((cert, index) => (
                <motion.div key={index} variants={itemVariants} className="h-full">
                  <div
                    onClick={() => setOpenModal({ state: true, project: cert, type: "certificate" })}
                    className="group relative rounded-2xl overflow-hidden glassmorphism-card border border-neon-cyan/30 cursor-pointer shadow-lg transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,243,255,0.35)] hover:-translate-y-2"
                  >
                    <img
                      src={cert.img}
                      alt={`${cert.degree} certificate`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-[180px] sm:h-[220px] object-cover bg-white transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="relative flex flex-col justify-end p-3 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                      <div className="text-[13px] sm:text-[14px] font-bold text-white group-hover:text-neon-cyan">
                        {cert.degree}
                      </div>
                      <div className="text-[11px] sm:text-[12px] font-medium text-gray-300 mt-1">
                        {cert.school} • {cert.date}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
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
