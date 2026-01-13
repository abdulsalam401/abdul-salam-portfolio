import React from "react";
import { education, experiences, certifications } from "../data/constants";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import EducationCard from "./EducationCard";
const Education = ({ openModal, setOpenModal }) => {
  return (
    // container
    <div
      id="education"
      className="flex flex-col justify-center items-center relative z-1 pb-0 px-0 md:pb-[60px]"
    >
      {/* wrapper */}
      <div className="flex flex-col justify-between items-center   w-full max-w-[1350px]  pt-10 gap-3">
        <h1 className="text-[32px] text-center font-semibold mt-3 md:mt-5 md:text-[42px]  text-darkTheme-text_primary">
          Education
        </h1>

        {/* TimelineSection */}
        <div className="w-full max-w-[1000px] mt-[10px] flex flex-col items-end justify-center gap-3 sm:items-center">
          <Timeline>
            {education.map((education, index) => (
              <TimelineItem>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <EducationCard education={education} />
                </TimelineContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  {index !== education.length - 1 && (
                    <TimelineConnector style={{ background: "#854CE6" }} />
                  )}
                </TimelineSeparator>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
        {/* Certifications Section (if available) */}
        {certifications && certifications.length > 0 && (
          <div className="flex flex-col justify-between items-center w-full max-w-[1350px] pt-10 gap-3">
            <h1 className="text-[32px] text-center font-semibold mt-3 md:mt-5 md:text-[42px] text-darkTheme-text_primary">
              Certifications
            </h1>
            <div className="w-full max-w-[1000px] mt-[10px] flex flex-col items-end justify-center gap-3 sm:items-center">
              <Timeline>
                {certifications.map((cert, index) => (
                  <TimelineItem key={index}>
                    <TimelineContent sx={{ py: "12px", px: 2 }}>
                      <EducationCard
                        education={cert}
                        onClick={() =>
                          setOpenModal({
                            state: true,
                            project: cert,
                            type: "certificate",
                          })
                        }
                      />
                    </TimelineContent>
                    <TimelineSeparator>
                      <TimelineDot variant="outlined" color="secondary" />
                      {index !== certifications.length - 1 && (
                        <TimelineConnector style={{ background: "#854CE6" }} />
                      )}
                    </TimelineSeparator>
                  </TimelineItem>
                ))}
              </Timeline>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Education;
