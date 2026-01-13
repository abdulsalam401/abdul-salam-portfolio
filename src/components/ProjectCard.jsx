import React from "react";

const Avatar = ({ src }) => (
  <img
    className="hidden group-hover:flex w-auto h-70 bg-black rounded-lg transition-all duration-300 opacity-0 hover:opacity-80 cursor-pointer"
    src={src}
    alt="Document"
  />
);

const ProjectCard = ({ project, setOpenModal }) => {
  return (
    // card
    <div
      onClick={() => setOpenModal({ state: true, project: project, type: "project" })}
      className="w-[330px] h-[490px] bg-darkTheme-bg cursor-pointer rounded-[10px] shadow-lg overflow-hidden transition-transform ease-in-out duration-500 hover:translate-y-[-10px] hover:shadow-2xl hover:brightness-[1.1] py-[26px] px-[20px]"
    >
      <img
        src={project.image}
        className="w-full h-[180px] bg-white rounded-[10px] shadow-md object-cover"
      />
      {/* tags */}
      <div className="w-full flex items-center flex-wrap gap-2 mt-2 ">
        {project.tags?.map((tag, index) => (
          <span key={index} className="text-xs font-normal text-primary1 bg-zinc-800 py-[2px] px-2 rounded-[10px]">
            {tag}
          </span>
        ))}
      </div>
      <div className="w-full flex flex-col gap-0 p-[2px]">
        <h1 className="text-2xl font-semibold text-darkTheme-text_secondary overflow-hidden">
          {project.title}
        </h1>
        <div className="text-xs ml-[2px] font-normal text-darkTheme-text_secondary md:text-sm">
          {project.date}
        </div>
        <p className="font-normal text-darkTheme-text_secondary overflow-hidden line-clamp-4 mt-2 w-full">
          {project.description}
        </p>
      </div>
      <div>
        {project.member?.map((member) => (
          <Avatar src={member.img} />
        ))}
      </div>
      {/* <Button>View Project</Button> */}
    </div>
  );
};

export default ProjectCard;
