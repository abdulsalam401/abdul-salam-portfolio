import React from "react";
import { motion } from "framer-motion";

const Avatar = ({ src }) => (
  <img
    className="hidden group-hover:flex w-auto h-8 bg-black rounded-full border border-neon-purple transition-all duration-300"
    src={src}
    alt="Member Avatar"
  />
);

const ProjectCard = ({ project, setOpenModal }) => {
  return (
    <motion.div
      onClick={() => setOpenModal({ state: true, project: project, type: "project" })}
      className="w-[330px] h-[490px] glassmorphism-card cursor-pointer rounded-2xl overflow-hidden transition-all ease-in-out duration-500 hover:shadow-[0_0_30px_rgba(188,19,254,0.4)] hover:border-neon-purple/50 group flex flex-col pt-5 px-5 pb-4"
      whileHover={{ y: -12 }}
    >
      <div className="relative overflow-hidden rounded-xl h-[180px] w-full">
        <img
          src={project.image}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-neon-purple/30 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* tags */}
      <div className="w-full flex items-center flex-wrap gap-2 mt-4">
        {project.tags?.map((tag, index) => (
          <span key={index} className="text-[10px] font-semibold tracking-wider text-neon-cyan bg-neon-cyan/10 border border-neon-cyan/20 py-1 px-3 rounded-full uppercase">
            {tag}
          </span>
        ))}
      </div>

      <div className="w-full flex flex-col gap-1 mt-3 flex-grow">
        <h1 className="text-2xl font-bold text-white group-hover:text-neon-purple transition-colors duration-300 overflow-hidden line-clamp-1">
          {project.title}
        </h1>
        <div className="text-xs font-light text-gray-400">
          {project.date}
        </div>
        <p className="font-light text-gray-300 text-sm overflow-hidden line-clamp-4 mt-2 w-full leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="flex gap-2 mt-auto">
        {project.member?.map((member, index) => (
          <Avatar key={index} src={member.img} />
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
