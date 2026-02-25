import React from "react";

const EducationCard = ({ education, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`md:w-[650px] w-[320px] rounded-2xl glassmorphism-card shadow-lg p-5 flex flex-col justify-between relative gap-4 transition-all duration-300 hover:shadow-[0_0_25px_rgba(188,19,254,0.3)] hover:-translate-y-2 border border-neon-purple/30 group ${onClick ? "cursor-pointer" : ""
        }`}
    >
      <div className="w-full flex gap-4">
        <img
          src={education.img}
          className="md:h-[60px] h-[50px] w-auto bg-white/90 p-1 rounded-xl object-contain shadow-inner"
          alt="School logo"
        />
        <div className="w-full flex flex-col justify-center">
          <div className="md:text-[20px] text-[16px] font-bold text-white group-hover:text-neon-cyan transition-colors">
            {education.school}
          </div>
          <div className="md:text-[15px] text-[13px] font-medium text-gray-300 mt-1">
            {education.degree}
          </div>
          <div className="md:text-[13px] text-[11px] font-light text-gray-400 mt-1">
            {education.date}
          </div>
        </div>
      </div>

      <div className="text-[13px] font-medium text-gray-200 md:text-[15px] bg-white/5 py-2 px-3 rounded-lg border border-white/10 w-fit">
        <b className="text-neon-cyan">Grade: </b>
        {education.grade}
      </div>

      <div className="w-full text-[13px] md:text-[15px] font-light text-gray-300 mt-2 leading-relaxed">
        <span className="overflow-hidden line-clamp-4 box-orient-vertical">
          {education.desc}
        </span>
      </div>
    </div>
  );
};

export default EducationCard;
