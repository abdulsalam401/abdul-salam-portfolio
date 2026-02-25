import React from "react";
import { education, certifications } from "../data/constants";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import EducationCard from "./EducationCard";
import { motion } from "framer-motion";

const Education = ({ openModal, setOpenModal }) => {
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
          className="w-full max-w-[1000px] mt-[10px] flex flex-col items-end justify-center gap-3 sm:items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Timeline>
            {education.map((edu, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" sx={{ borderColor: '#bc13fe', borderWidth: 2 }} />
                  {index !== education.length - 1 && (
                    <TimelineConnector sx={{ background: "linear-gradient(to bottom, #bc13fe, rgba(188,19,254,0))", width: '2px' }} />
                  )}
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <motion.div variants={itemVariants}>
                    <EducationCard education={edu} />
                  </motion.div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
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
              className="w-full max-w-[1000px] mt-[10px] flex flex-col items-end justify-center gap-3 sm:items-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <Timeline>
                {certifications.map((cert, index) => (
                  <TimelineItem key={index}>
                    <TimelineSeparator>
                      <TimelineDot variant="outlined" color="primary" sx={{ borderColor: '#00f3ff', borderWidth: 2 }} />
                      {index !== certifications.length - 1 && (
                        <TimelineConnector sx={{ background: "linear-gradient(to bottom, #00f3ff, rgba(0,243,255,0))", width: '2px' }} />
                      )}
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: "12px", px: 2 }}>
                      <motion.div variants={itemVariants}>
                        <EducationCard
                          education={cert}
                          onClick={() => setOpenModal({ state: true, project: cert, type: "certificate" })}
                        />
                      </motion.div>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Education;
