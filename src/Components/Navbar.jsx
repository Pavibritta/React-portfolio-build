import React from "react";
import github from "../assets/images/GitHub.png";
import gmail from "../assets/images/gmail.avif";
import linkedin from "../assets/images/LinkedIn_logo_initials.png";

const Navbar = () => {
  return (
    <>
      <header className="fixed w-full bg-gray-950/80 backdrop-blur z-50">
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Pavithra
          </h1>
          <ul className="hidden md:flex gap-8 text-gray-300 items-center">
            <li>
              <a href="#home" className="hover:text-[#22d3ee]">
                Home
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Pavibritta"
                className=" bg-secondary  rounded-full transition hover:text-[#22d3ee]"
              >
                <img src={github} alt="" className="h-7 w-7 rounded-full" />
              </a>
            </li>
            <li>
              <a
                href="mailto:pavithrarajase1@gmail.com"
                className=" bg-secondary  rounded-full transition hover:text-[#22d3ee]"
              >
                <img src={gmail} alt="" className="h-7 w-7 rounded-full" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/pavithra-r-2621bb232/"
                className=" bg-secondary  rounded-full transition hover:text-[#22d3ee]"
              >
                <img src={linkedin} alt="" className="h-7 w-7 rounded-full" />
              </a>
            </li>
            {/* <li>
              <a href="#about" className="hover:text-[#22d3ee]">
                About
              </a>
            </li> */}
            {/* <li>
              <a href="#skills" className="hover:text-[#22d3ee]">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-[#22d3ee]">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#22d3ee]">
                Contact
              </a>
            </li> */}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
