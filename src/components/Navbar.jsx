import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: "About", hrefValue: "#about" },
    { id: 2, link: "Skills", hrefValue: "#skills" },
    { id: 3, link: "Experience", hrefValue: "#experience" },
    { id: 4, link: "Projects", hrefValue: "#projects" },
    { id: 5, link: "Education", hrefValue: "#education" },
    { id: 6, link: "Contact", hrefValue: "#contact" },
  ];

  return (
    <div
      id="home"
      className="flex w-full items-center justify-center h-20 text-lightTheme-card sticky bg-darkTheme-card_light z-10 top-0"
    >
      <div className="flex max-w-7xl mx-auto justify-between items-center w-full h-20 text-white bg-darkTheme-card_light px-6 ">
        <div>
          <a className="text-4xl md:text-5xl font-signature" href="#home">
            Abdul Salam
          </a>
        </div>
        <ul className="hidden md:flex space-x-4">
          {links.map(({ id, link, hrefValue }) => (
            <a
              href={hrefValue}
              key={id}
              className="cursor-pointer capitalize font-medium text-darkTheme-text_primary hover:text-darkTheme-primary transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </ul>
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-darkTheme-text_primary md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-darkTheme-card_light ">
            {links.map(({ id, link, hrefValue }) => (
              <a
                href={hrefValue}
                onClick={() => setNav(!nav)}
                key={id}
                className="cursor-pointer capitalize font-medium text-darkTheme-text_primary py-6 text-2xl md:text-4xl"
              >
                {link}
              </a>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
