import React, { useState, useEffect } from "react";
import { useAppContext } from "../context/appContext";
import { assets } from "../assets/assets";
function Nav() {
  const { mode, setMode } = useAppContext();
  const [activeLink, setActiveLink] = useState("");
  const [menuToggled, setMenuToggled] = useState(false);

  useEffect(() => {
    setMenuToggled(false);
  }, []);

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center border-b border-gray-200 pb-2 bg-white">
      <img className="w-20 md:w-28" src={assets.logo} alt="" />
      <div>
        <ul className="hidden md:flex gap-10">
          <li
            className={`${
              activeLink === "home" ? `text-indigo-600 font-bold` : null
            } hover:cursor-pointer`}
            onClick={() => setActiveLink("home")}
          >
            <a href="#header"> Home</a>
          </li>
          <li
            className={`${
              activeLink === "about" ? `text-indigo-600 font-bold` : null
            } hover:cursor-pointer`}
            onClick={() => setActiveLink("about")}
          >
            <a href="#about"> About</a>
          </li>
          <li
            className={`${
              activeLink === "stack" ? `text-indigo-600 font-bold` : null
            } hover:cursor-pointer`}
            onClick={() => setActiveLink("stack")}
          >
            <a href="#projects"> Projects</a>
          </li>
          <li
            className={`${
              activeLink === "contact" ? `text-indigo-600 font-bold` : null
            } hover:cursor-pointer`}
            onClick={() => setActiveLink("contact")}
          >
            <a href="#services">Services</a>
          </li>
        </ul>
      </div>
      <div className="flex gap-5">
        <a href="https://www.linkedin.com/in/kelvin-njuguna-8a48a8336/">
          <img
            className="hidden md:block h-6 w-6 md:w-8 md:h-8"
            src={assets.linkedin}
            alt=""
          />
        </a>
        <a href="https://github.com/smartdevASAP">
          <img
            className="hidden md:block h-6 w-6 md:w-8 md:h-8"
            src={assets.github}
            alt=""
          />
        </a>
        <img
          onClick={() => setMenuToggled(true)}
          className="w-6 opacity-70 md:hidden"
          src={assets.menu}
          alt=""
        />
      </div>
      {menuToggled && (
        <>
          {/* Sidebar */}
          {menuToggled && (
            <div
              className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
                menuToggled ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-lg font-bold">Menu</h2>
                <button
                  className="text-2xl font-bold cursor-pointer"
                  onClick={() => setMenuToggled(false)}
                >
                  ×
                </button>
              </div>

              <ul className="flex flex-col gap-4 p-4">
                <li
                  className="hover:text-indigo-600 cursor-pointer"
                  onClick={() => {
                    setActiveLink("home");
                    setMenuToggled(false);
                  }}
                >
                  Home
                </li>
                <li
                  className="hover:text-indigo-600 cursor-pointer"
                  onClick={() => {
                    setActiveLink("about");
                    setMenuToggled(false);
                  }}
                >
                  About
                </li>
                <li
                  className="hover:text-indigo-600 cursor-pointer"
                  onClick={() => {
                    setActiveLink("projects");
                    setMenuToggled(false);
                  }}
                >
                  Projects
                </li>
                <li
                  className="hover:text-indigo-600 cursor-pointer"
                  onClick={() => {
                    setActiveLink("services");
                    setMenuToggled(false);
                  }}
                >
                  Services
                </li>
              </ul>
            </div>
          )}
        </>
      )}
    </nav>
  );
}

export default Nav;
