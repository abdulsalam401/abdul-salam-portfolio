import React, { useState } from "react";
import { projects } from "../data/constants";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div id="projects" className="relative z-1 p-2 flex flex-col justify-center items-center">
      <div className="relative flex justify-between items-center flex-col w-full max-w-[1350px] p-[10px] pb-[100px] gap-3">

        <motion.h2
          className="md:text-[45px] text-center font-bold text-white md:mt-10 mt-5 text-[35px] text-glow-purple"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        {/* toggle button group */}
        <motion.div
          className="flex border border-neon-purple/50 bg-black/20 backdrop-blur-md text-white md:text-[16px] font-medium rounded-full my-8 text-[12px] overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {["All", "cybersecurity"].map((cat) => (
            <div
              key={cat}
              onClick={() => setToggle(cat.toLowerCase())}
              className={`py-[8px] px-[16px] md:py-3 md:px-8 cursor-pointer transition-all duration-300 uppercase tracking-wider text-sm ${toggle === cat.toLowerCase()
                  ? "bg-neon-purple/30 text-neon-cyan shadow-[inset_0_0_15px_rgba(188,19,254,0.4)]"
                  : "hover:bg-white/5"
                }`}
            >
              {cat}
            </div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center items-center gap-8 flex-wrap"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects
            .filter((item) => toggle === "all" || item.category === toggle)
            .map((project, index) => (
              <motion.div key={index} variants={childVariants}>
                <ProjectCard
                  project={project}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              </motion.div>
            ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
