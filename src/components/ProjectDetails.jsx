import React from "react";
import { CloseRounded, GitHub, LinkedIn } from "@mui/icons-material";
import { Modal } from "@mui/material";

const MemberImage = ({ src }) => (
  <img
    class="md:w-[50px] md:h-[50px] object-cover rounded-full mb-1 shadow-md w-[32px] h-[32px]"
    src={src}
    alt="memeber"
  />
);
const ProjectDetails = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;

  const handleViewCode = () => {
    if (project?.github) {
      window.open(project.github, "_blank", "noopener,noreferrer");
    }
  };

  const handleViewLiveApp = () => {
    if (project?.webapp) {
      window.open(project.webapp, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <Modal
      open={true}
      onClose={() => setOpenModal({ state: false, project: null })}
    >
      {/* Container */}
      <div className="w-full h-full absolute top-0 left-0 bg-[#000000a7]  flex items-top justify-center overflow-y-scroll transition-all duration-500 ease-in-out">
        {/* wrapper */}
        <div class="max-w-[800px] w-full rounded-2xl my-[50px] mx-[12px] h-fit bg-darkTheme-card text-lightTheme-text_primary p-5 flex flex-col relative">
          <CloseRounded
            style={{
              position: "absolute",
              top: "10px",
              right: "20px",
              cursor: "pointer",
              color: "white",
            }}
            onClick={() => setOpenModal({ state: false, project: null })}
          />
          <img
            src={project?.image}
            className="w-full object-cover rounded-[12px] mt-[30px]"
          />
          <h1 className="text-[24px] font-semibold text-darkTheme-text_primary  my-[6px] mb-0  md:text-[28px] md:my-[7px]">
            {project?.title}
          </h1>
          <div className="md:text-[16x] my-[2px] mx-[6px] font-normal text-lightTheme-text_secondary text-[12px]">
            {project.date}
          </div>
          {/* tags */}
          <div className="flex flex-wrap my-1 md:my-2">
            {project?.tags.map((tag) => (
              <div className="text-[12px] font-normal text-darkTheme-text_primary m-1 py-1 px-2 rounded-lg bg-zinc-800 md:text-[14px]">
                {tag}
              </div>
            ))}
          </div>
          <p className="text-[14px] font-normal text-darkTheme-text_primary my-[6px] mx-[6px] md:text-[16px] md:m-[6px]">
            {project?.description}
          </p>
          {project.member && (
            <>
              <label className="text-[16px] font-semibold text-darkTheme-primary m-2 md:text-[20px] md:m-2">
                Members
              </label>
              {/* memebers */}
              <div className="flex flex-col gap-1 flex-wrap m-1 md:m-3">
                {project?.member.map((member) => (
                  // member
                  <div className="flex items-center gap-3">
                    <MemberImage src={member.img} />
                    <div class="text-[14px] font-medium w-[200px] text-darkTheme-primary md:text-[16px]">
                      {member.name}
                    </div>
                    <a
                      href={member.github}
                      target="new"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <GitHub />
                    </a>
                    <a
                      href={member.linkedin}
                      target="new"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <LinkedIn />
                    </a>
                  </div>
                ))}
              </div>
            </>
          )}
          {/* button group */}
          <div className="flex justify-end my-3 gap-3">
            <button
              onClick={handleViewCode}
              className={`text-[12px] w-full text-center md:text-[16px] font-semibold py-3 px-1 rounded-[8px] ${
                project?.dull
                  ? "bg-lightTheme-bg hover:bg-lightTheme-bgLight text-lightTheme-text_secondary"
                  : "bg-darkTheme-text_secondary"
              } cursor-pointer no-underline transition-all duration-500 ease`}
              disabled={!project?.github}
              style={{
                opacity: project?.github ? 1 : 0.5,
                cursor: project?.github ? "pointer" : "not-allowed",
              }}
            >
              View Code
            </button>
            <button
              onClick={handleViewLiveApp}
              className="w-full text-center text-[14px] md:text-[16px] font-semibold py-3 px-1 rounded-[8px] bg-darkTheme-primary cursor-pointer transition-all duration-500 ease"
              disabled={!project?.webapp}
              style={{
                opacity: project?.webapp ? 1 : 0.5,
                cursor: project?.webapp ? "pointer" : "not-allowed",
              }}
            >
              View Live App
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectDetails;
