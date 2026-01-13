import React, { useState } from "react";
import { projects } from "../data/constants";
import ProjectCard from "./ProjectCard";
const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  return (
    <div id="projects" className="relative z-1 bg-gradient-to-b from-opacity-0 via-opacity-6 to-opacity-0 p-2 flex flex-col justify-center items-center">
      {/* wrapper */}
      <div className="relative flex justify-between items-center flex-col w-full max-w-[1350px] p-[10px] pb-[100px] gap-3 ">
        {/* title */}
        <h2 className="md:text-[42px] text-center font-semibold  text-darkTheme-text_primary md:mt-5 mt-3 text-[32px]">
          Projects
        </h2>
        {/* descp */}

        {/* toggle button group */}
        <div className="flex border border-darkTheme-primary text-darkTheme-primary md:text-[16px] font-medium rounded-xl my-5 text-[12px]">
          {toggle === "cybersecurity" ? (
            <div
              active
              value="cybersecurity"
              onClick={() => setToggle("cybersecurity")}
              className={`py-[6px] px-[8px] rounded md:py-2 md:px-[18px] md:rounded-md cursor-pointer active:bg-darkTheme-primary `}
            >
              CYBERSECURITY
            </div>
          ) : (
            <div
              value="cybersecurity"
              onClick={() => setToggle("cybersecurity")}
              className={`py-[6px] px-[8px] rounded md:py-2 md:px-[18px] md:rounded-md cursor-pointer  `}
            >
              CYBERSECURITY
            </div>
          )}
        </div>

        <div className="flex justify-center items-center gap-7 flex-wrap ">
          {toggle === "all" &&
            projects.map((project, index) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
                key={index}
              />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project, index) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
                key={index}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
