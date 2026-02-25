import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: "About", hrefValue: "#about" },
    { id: 2, link: "Skills", hrefValue: "#skills" },
    { id: 4, link: "Projects", hrefValue: "#projects" },
    { id: 5, link: "Education", hrefValue: "#education" },
    { id: 6, link: "Contact", hrefValue: "#contact" },
  ];

  return (
    <div
      id="home"
      className="flex w-full items-center justify-center h-20 fixed z-50 top-4 px-4 sm:px-10 transition-all duration-300"
    >
      <div className="flex max-w-7xl mx-auto justify-between items-center w-full h-16 text-white glassmorphism px-6 sm:px-8 rounded-full border border-neon-purple/30 shadow-[0_0_15px_rgba(188,19,254,0.2)]">
        <div>
          <a className="text-3xl md:text-4xl font-signature text-white text-glow-purple" href="#home">
            Abdul Salam
          </a>
        </div>
        <ul className="hidden md:flex space-x-6">
          {links.map(({ id, link, hrefValue }) => (
            <a
              href={hrefValue}
              key={id}
              className="cursor-pointer capitalize font-medium text-darkTheme-text_primary hover:text-neon-cyan hover:text-glow-cyan transition-all duration-300"
            >
              <li>{link}</li>
            </a>
          ))}
        </ul>
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-2 z-50 text-darkTheme-text_primary hover:text-neon-cyan transition-colors md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* Mobile Menu */}
        <div className={`fixed top-0 left-0 w-full h-screen glassmorphism !bg-darkTheme-bg/95 z-40 flex flex-col justify-center items-center transition-transform duration-500 ease-in-out ${nav ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"} md:hidden text-white`}>
          <ul className="flex flex-col justify-center items-center w-full">
            {links.map(({ id, link, hrefValue }) => (
              <a
                href={hrefValue}
                onClick={() => setNav(!nav)}
                key={id}
                className="cursor-pointer capitalize font-semibold text-darkTheme-text_primary py-6 text-3xl hover:text-neon-cyan hover:text-glow-cyan transition-all duration-300"
              >
                <li>{link}</li>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
