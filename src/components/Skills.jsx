import React from "react";
import { skills } from "../data/constants";
import { motion } from "framer-motion";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div id="skills" className="flex flex-col items-center justify-center z-10 relative py-10">
      <div className="flex flex-col items-center justify-between w-full max-w-7xl relative gap-3 px-4">

        <motion.h1
          className="mt-3 text-white text-3xl md:mt-5 font-bold items-center md:text-[45px] text-glow-purple tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h1>

        <motion.p
          className="text-[16px] md:text-[18px] text-center max-w-[600px] text-gray-300 font-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Here are some of my skills on which I have been working for the past 2 years.
        </motion.p>

        <motion.div
          className="w-full flex justify-center gap-8 flex-wrap mt-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.title}
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: "0 0 25px rgba(188,19,254,0.3)" }}
              className="max-w-[350px] w-full sm:max-w-[400px] md:max-w-[500px] glassmorphism-card border border-neon-purple/30 md:py-8 py-6 px-6 md:px-10 rounded-2xl shadow-xl transition-all duration-300"
            >
              <h2 className="text-2xl font-bold text-white mb-6 text-center tracking-wide">
                {skill.title}
              </h2>
              <div className="flex flex-wrap gap-4 justify-center mb-3">
                {skill.skills.map((item) => (
                  <div
                    key={item.name}
                    className="text-sm py-2 px-4 rounded-full text-gray-200 flex items-center justify-center gap-2 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-neon-cyan/50 hover:text-neon-cyan transition-all duration-300 cursor-pointer"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-6 h-6 object-contain"
                    />
                    {item.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
