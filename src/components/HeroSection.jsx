import React from "react";
import HeroImg from "../assets/abdul.jpg";
import Typewriter from "typewriter-effect";
import { Bio } from "../data/constants";
const HeroSection = () => {
  return (
    <div
      id="about"
      className="bg-darkTheme-card_light flex justify-center  sm:py-[80px] sm:px-[30px] px-4 py-8  z-1 relative max-w-[1100px]  mx-auto"
    >
      <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-6xl gap-5">
        <div
          id="Left"
          className="w-full order-2 lg:order-1 mb-8 md:mb-0 flex flex-col items-center lg:items-start"
        >
          <h1 className="font-bold text-center text-4xl md:text-5xl lg:text-start  text-darkTheme-text_primary mb-2">
            Hi, I am <br /> {Bio.name}
          </h1>
          <div className="text-xl mb-4 text-center lg:text-start md:text-3xl font-semibold flex gap-3 text-darkTheme-text_primary">
            I am a
            <span className="text-darkTheme-primary cursor-pointer">
              <Typewriter
                options={{
                  strings: Bio.roles,
                  autoStart: true,
                  loop: true,
                  delay: 30, // Adjust the delay for smoother typing
                  deleteSpeed: "natural", // Use the default delete speed
                }}
              />
            </span>
          </div>

          <p className="text-[16px] sm:text-xl lg:text-xl text-center lg:text-left mb-8 text-gray-300 font-light leading-relaxed">
            {Bio.description}
          </p>
          <a
            href={Bio.resume}
            target="display"
            className="block   max-w-80 self-center bg-gradient-to-r from-purple-800 via-purple-700 to-purple-700 text-darkTheme-white font-bold text-lg py-3 px-5 rounded-lg hover:scale-105 transition duration-300 lg:self-start"
          >
            Check Resume
          </a>
        </div>
        <div
          id="Right"
          className="w-full order-1 lg:order-2  flex justify-center items-center lg:justify-end gap-4 mb-[30px] sm:mb-[50px] "
        >
          <img
            src={HeroImg}
            alt="hero-image"
            className="relative object-cover w-full  max-w-[280px] max-h-[280px] sm:max-w-[400px] sm:max-h-[400px]  rounded-full ring-2 ring-purple-800 "
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
