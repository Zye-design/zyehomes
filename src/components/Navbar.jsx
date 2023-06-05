import { useState } from "react";

import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

import { navLinks } from "../constants";

const Navbar = ({ isTopOfPage }) => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const navbarBackground = isTopOfPage ? "" : "bg-primary ";

  return (
    <nav
      className={`${navbarBackground} w-full flex py-6 justify-between items-center navbar `}
    >
      <div className="flex items-center ">
        <div className="inline-flex items-center  text-white font-poppins font-normal cursor-pointer text-[1.5rem]">
          <span>B</span>
          <span className="text-[2rem] px-1 mt-[-0.5em]">.</span>
          <span className="text-balaBlue uppercase">homes</span>
        </div>
      </div>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[1rem] ${
              active === nav.title ? "text-balaBlue" : "text-secondary"
            } ${index === navLinks.length - 1 ? "mr-0 button" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute z-10 top-20 ml-2 my-2 min-w-[140px] rounded-xl right-0 sidebar`}
        >
          <ul
            className={`list-none flex justify-end items-start flex-1 flex-col `}
          >
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={` font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-balaBlue" : "text-bulaBa"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
