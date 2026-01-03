import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
// import ExperienceCard from '../Cards/ExperienceCard';
import { experiences } from "../data/constants";
import ExperienceCard from "./ExperienceCard";
const Experience = () => {
  if (!experiences || experiences.length === 0) return null;
  return (
    <section
      id="experience"
      className="p-0 md:pt-10 md:pr-0 md:pb-20 md:pl-0 flex flex-col justify-center relative items-center z-1"
    >
      {/* wrapper */}
      <div className=" relative flex flex-col justify-between items-center w-full max-w-[1350px] py-20 px-0 gap-5 ">
        <h1 className="mt-3 text-3xl md:text-[42px] md:mt-5 font-semibold text-center text-darkTheme-text_primary">
          Experience
        </h1>

        <p className="mt-3 text-[16px] md:text-[18px] text-center max-w-[600px] text-darkTheme-text_secondary">
          My journey as a Junior Data Analyst and MERN Stack developer reflects my commitment to continuous learning, problem-solving, and building practical, real-world solutions.
        </p>

        {/* Timeline section */}
        <div className="w-full max-w-[1000px] mt-2 flex flex-col items-center justify-center gap-3 ">
          {/* timeline */}
          <Timeline>
            {experiences.map((experience, index) => (
              <TimelineItem key={experience.id}>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  <TimelineConnector style={{ background: "#854CE6" }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <ExperienceCard experience={experience} />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </section>
  );
};

export default Experience;
