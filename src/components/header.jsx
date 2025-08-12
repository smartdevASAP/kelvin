import React from "react";
import { assets } from "../assets/assets";
import { logos } from "../assets/assets";

function Header() {
  return (
    <div id="header" className="border-b border-gray-100 pb-12">
      <div className="mt-8 flex flex-col md:flex-row justify-center items-center text-center md:text-left ">
        {/* Left Section */}
        <div className="md:p-4 p-2 w-full md:w-[50vw]">
          <h1 className="md:text-3xl text-2xl font-bold">
            Hello there 👋, I am Kelvin, A senior software engineer
          </h1>
          <p className="md:text-sm text-xs mt-2">
            Hi, I'm Kelvin 👋 A Passionate Full-Stack Developer & Tech
            Enthusiast. I build modern, responsive, and efficient web
            applications using the latest technologies. Let’s create something
            amazing together.
          </p>
          <div className="flex gap-4 justify-center md:justify-start mt-4">
            <button className="rounded-full flex gap-2 items-center md:p-4 p-2 bg-indigo-500 shadow-xs text-white">
              <a
                href="/cv.pdf"
                rel="noopener noreferrer"
                // className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                View Resume
              </a>
              <img className="h-5" src={assets.arrow} alt="" />
            </button>
            <a
              href="#footer"
              className="rounded-full md:p-4 p-2 hidden md:inline-flex bg-gray-200 shadow-xs"
            >
              Contact me
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center md:justify-end w-full md:w-auto">
          <img
            src={assets.group}
            alt=""
            className="max-w-xs md:max-w-sm mt-4 md:mt-0"
          />
        </div>
      </div>

      {/* marquee */}
      <div className="overflow-hidden mt-8 whitespace-nowrap">
        <div className="flex animate-marquee">
          {logos.concat(logos).map((logo, key) => (
            <img src={logo.img} key={key} alt="" className="mx-4 h-6 w-auto" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
