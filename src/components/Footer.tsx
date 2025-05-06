import React from "react";
import { Link } from "react-scroll";
import { FaLinkedin, FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <div className="container mx-auto text-center">
        {/* Section Navigation Links */}
        <div className="mb-4 flex justify-center space-x-6 text-sm md:text-base">
          {["about", "projects", "services", "contact"].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-400 transition-colors"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4 mb-6">
          <a
            href="https://www.linkedin.com/in/nd-levi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl hover:text-blue-500" />
          </a>
          <a
            href="https://www.instagram.com/dabs_levi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl hover:text-pink-500" />
          </a>
          <a
            href="https://wa.me/qr/YRXSF4SSQUCHK1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-2xl hover:text-green-500" />
          </a>
          <a
            href="https://github.com/IvelDabs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl hover:text-gray-400" />
          </a>
        </div>
        <p className="mt-18">
          © {new Date().getFullYear()} Daberechi Levi Nwachukwu. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
