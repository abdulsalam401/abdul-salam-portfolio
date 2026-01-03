import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Bio } from "../data/constants";
import { GitHub } from "@mui/icons-material";
const Footer = () => {
  return (
    // conatiner
    <div className="w-full py-[24px] flex justify-center">
      {/* wrapper */}
      <div className="w-full max-w-[1200px] flex flex-col gap-[14px] items-center p-[16px] text-darkTheme-text_primary">
        <div className="flex gap-3">
          <h1 className=" font-bold text-[27px] md:text-[24px] text-darkTheme-primary font-signature">
            Abdul
          </h1>
          <h1 className=" font-bold text-[27px] md:text-[24px] text-darkTheme-primary font-signature">
            Salam
          </h1>
        </div>
        <nav className="w-full max-w-[800px] flex flex-row flex-wrap gap-[18px] justify-center mt-[4px]">
          <a
            href="#about"
            className="text-darkTheme-text_primary text-[16px] md:text-[20px] transition-colors font-medium duration-200 hover:text-primary1"
          >
            About
          </a>
          <a
            href="#skills"
            className="text-darkTheme-text_primary text-[16px] md:text-[20px] transition-colors font-medium duration-200 hover:text-primary1"
          >
            Skills
          </a>
          <a
            href="#experience"
            className="text-darkTheme-text_primary text-[16px] md:text-[20px] transition-colors font-medium duration-200 hover:text-primary1"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="text-darkTheme-text_primary text-[16px] md:text-[20px] transition-colors font-medium duration-200 hover:text-primary1"
          >
            Projects
          </a>
          <a
            href="#education"
            className="text-darkTheme-text_primary text-[16px] md:text-[20px] transition-colors font-medium duration-200 hover:text-primary1"
          >
            Education
          </a>
        </nav>
        <div className="flex mt-[16px]">
          <a
            href={Bio.facebook}
            target="display"
            className="inline-block mx-[14px] text-[16px] md:text-[20px] text-darkTheme-text_primary transition-colors duration-200 hover:text-primary1"
          >
            <FacebookIcon />
          </a>
          <a
            href={Bio.twitter}
            target="display"
            className="inline-block mx-[14px] text-[16px] md:text-[20px] text-darkTheme-text_primary transition-colors duration-200 hover:text-primary1"
          >
            <TwitterIcon />
          </a>
          <a
            href={Bio.linkedin}
            target="display"
            className="inline-block mx-[14px] text-[16px] md:text-[20px] text-darkTheme-text_primary transition-colors duration-200 hover:text-primary1"
          >
            <LinkedInIcon />
          </a>
          <a
            href={Bio.insta}
            target="display"
            className="inline-block mx-[16px] text-[16px] md:text-[20px] text-darkTheme-text_primary transition-colors duration-200 hover:text-primary1"
          >
            <InstagramIcon />
          </a>
          <a
            href={Bio.github}
            target="display"
            className="inline-block mx-[16px] text-[16px] md:text-[20px] text-darkTheme-text_primary transition-colors duration-200 hover:text-primary1"
          >
            <GitHub />
          </a>
        </div>
        <p className="mt-[24px] text-[14px]  text-center">
          &copy; 2026 Abdul Salam. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
