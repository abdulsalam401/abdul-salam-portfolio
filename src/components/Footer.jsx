import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Bio } from "../data/constants";
import { GitHub } from "@mui/icons-material";
import { SiTryhackme, SiHackthebox } from "react-icons/si";
const Footer = () => {
  return (
    // conatiner
    <div className="w-full py-[24px] flex justify-center">
      {/* wrapper */}
      <div className="w-full max-w-[1200px] flex flex-col gap-[14px] items-center p-[16px] text-darkTheme-text_primary">
        <div className="flex items-center gap-2 font-mono font-semibold tracking-widest text-[20px] text-darkTheme-primary">
          <span className="w-2 h-2 rounded-full bg-neon-cyan shadow-[0_0_10px_#00f3ff]"></span>
          ~/abdul-salam
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
          <a
            href="#contact"
            className="text-darkTheme-text_primary text-[16px] md:text-[20px] transition-colors font-medium duration-200 hover:text-primary1"
          >
            Contact
          </a>
        </nav>
        <div className="flex items-center justify-center flex-wrap gap-4 mt-[16px]">
          <a
            href={Bio.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="inline-flex items-center justify-center text-darkTheme-text_primary transition-colors duration-200 hover:text-primary1"
          >
            <FacebookIcon />
          </a>
          <a
            href={Bio.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="inline-flex items-center justify-center text-darkTheme-text_primary transition-colors duration-200 hover:text-primary1"
          >
            <TwitterIcon />
          </a>
          <a
            href={Bio.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex items-center justify-center text-darkTheme-text_primary transition-colors duration-200 hover:text-primary1"
          >
            <LinkedInIcon />
          </a>
          <a
            href={Bio.insta}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex items-center justify-center text-darkTheme-text_primary transition-colors duration-200 hover:text-primary1"
          >
            <InstagramIcon />
          </a>
          <a
            href={Bio.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex items-center justify-center text-darkTheme-text_primary transition-colors duration-200 hover:text-primary1"
          >
            <GitHub />
          </a>
          <a
            href={Bio.tryhackme}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TryHackMe"
            className="inline-flex items-center justify-center text-darkTheme-text_primary transition-colors duration-200 hover:text-primary1"
          >
            <SiTryhackme size={22} />
          </a>
          <a
            href={Bio.hackthebox}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hack The Box"
            className="inline-flex items-center justify-center text-darkTheme-text_primary transition-colors duration-200 hover:text-primary1"
          >
            <SiHackthebox size={22} />
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
