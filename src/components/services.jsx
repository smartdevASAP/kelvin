import React from "react";
import { services } from "../assets/assets";

function Services() {
  return (
    <div id="projects" className="mt-12">
      <p className="text-center font-bold mb-12 text-2xl">Projects</p>

      <div className="md:grid grid-cols-2 gap-6 max-w-5xl space-y-8 mx-auto">
        {services.map((service, key) => {
          return (
            <div
              key={key}
              className="md:w-[400px] rounded-sm shadow-md p-4 bg-white overflow-hidden"
            >
              <img className="w-full" src={service.img} alt="" />
              <p className="text-sm p-6">{service.text}</p>
              <button className="w-full bg-indigo-600 text-white hover:cursor-pointer rounded-sm p-2 hover:bg-indigo-700 transition">
                <a href="https://www.linkedin.com/in/kelvin-njuguna-8a48a8336/">
                  View more
                </a>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
