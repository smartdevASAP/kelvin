import React from "react";

function Footer() {
  return (
    <footer id="footer" className="bg-gray-100 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row p-2 items-center justify-between">
        {/* Left Side - Logo / Name */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h1 className="text-lg font-bold">Kelvin Kariuki</h1>
          <p className="text-sm text-gray-400">
            Full Stack Developer,Cloud engineer & cyber Security enthusiast
          </p>
        </div>

        {/* Center - Navigation */}
        <div className="flex flex-col gap-2 text-sm mb-4 md:mb-0 text-center md:text-left">
          <h1 className="font-bold  mb-2">Quick Links</h1>
          <a href="#header" className="hover:text-blue-400 transition">
            Home
          </a>
          <a href="#about" className="hover:text-blue-400 transition">
            About
          </a>
          <a href="#projects" className="hover:text-blue-400 transition">
            Projects
          </a>
          <a href="#footer" className="hover:text-blue-400 transition">
            Contact
          </a>
        </div>

        {/* Right Side - Socials */}
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h1 className="font-bold  mb-2">Contact me</h1>
          <a
            href="https://www.linkedin.com/in/kelvin-njuguna-8a48a8336/"
            className="hover:text-blue-400 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/smartdevASAP"
            className="hover:text-blue-400 transition"
          >
            Github
          </a>
          <a href="" className="hover:text-blue-400 transition">
            WhatsApp
          </a>
          <a
            href="https://mail.google.com/mail/u/0/#inbox"
            className="hover:text-blue-400 transition"
          >
            Email
          </a>
        </div>
      </div>

      {/* Bottom text */}
      <div className="text-center text-gray-500 text-xs mt-6">
        © {new Date().getFullYear()} Kelvin Kariuki. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
