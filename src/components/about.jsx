import React from "react";
import { assets } from "../assets/assets";
function About() {
  return (
    <div id="about" className="mt-8">
      <h1 className="text-center font-bold">About Me</h1>
      <div className="md:flex items-center space-y-10 gap-[36px] mt-16">
        <div>
          <p className="md:w-[45vw] text-gray-500 w-full md:text-sm">
            I'm Kelvin Njuguna, a self-taught web developer and cloud
            engineering enthusiast from Kenya. I started my coding journey with
            HTML and CSS, driven by curiosity and a deep passion for creating
            things that live on the internet.
          </p>
          <img className="mt-12 w-[250px]" src={assets.about} alt="" />
        </div>
        <div>
          {/* stats */}
          <div>
            {/* stats */}
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 text-center">
              <div className="bg-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-indigo-600">12+</h2>
                <p className="text-xs text-gray-500">Projects Completed</p>
              </div>

              <div className="bg-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-indigo-600">3</h2>
                <p className="text-xs text-gray-500">Awards Won</p>
              </div>

              <div className="bg-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-indigo-600">5</h2>
                <p className="text-xs text-gray-500">Pending Projects</p>
              </div>

              <div className="bg-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-indigo-600">10+</h2>
                <p className="text-xs text-gray-500">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
