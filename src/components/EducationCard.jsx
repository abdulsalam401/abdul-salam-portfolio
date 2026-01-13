import React from "react";

const EducationCard = ({ education, onClick }) => {
  return (
    // card
    <div
      onClick={onClick}
      className={`md:w-[650px] rounded-lg shadow-md p-[10px] md:py-3 md:px-4 flex flex-col justify-between relative w-[300px] gap-2 md:gap-3 transition-transform hover:shadow-lg hover:translate-y-[-5px] border-solid border border-[854CE6] ${onClick ? "cursor-pointer" : ""
        }`}
    >
      {/* top */}
      <div className="w-full flex gap-3">
        <img
          src={education.img}
          className="md:h-[50px] bg-black rounded-lg mt-1 h-[40px]"
        />
        {/* card body */}
        <div className="w-full flex flex-col">
          <div className="md:text-[18px] font-semibold text-darkTheme-text_secondary text-[14px]">
            {education.school}
          </div>
          <div className="md:text-[14px] font-medium text-darkTheme-text_secondary text-[12px]">
            {education.degree}
          </div>
          <div className="md:text-[12px] font-normal text-darkTheme-text_secondary text-[10px]">
            {education.date}
          </div>
        </div>
      </div>
      <div className="text-[12px] font-medium text-darkTheme-text_secondary md:text-[14px]">
        <b>Grade: </b>
        {education.grade}
      </div>
      <div className="w-full text-[12px] font-normal text-darkTheme-text_primary mb-[10px] md:text-[15px]">
        <span className="overflow-hidden line-clamp-4 box-orient-vertical text-darkTheme-text_secondary">
          {education.desc}
        </span>
      </div>
    </div>
  );
};

export default EducationCard;
