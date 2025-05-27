import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaLinkedin, FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";
import profile from "../assets/My_image.jpg";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center px-6 md:px-16 lg:px-40  text-white">
      {/* Navigation Buttons */}
      <div className="absolute top-6 right-6 flex space-x-6">
        {["about", "projects", "services", "contact", "My Resume"].map(
          (section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              className="cursor-pointer text-sm md:text-base hover:text-blue-400 transition-colors"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          )
        )}
        {/* <a
          href="https://my-resume-zeta-smoky.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-sm md:text-base hover:text-blue-400 transition-colors"
        >
          My Resume
        </a> */}
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center md:justify-between w-full gap-10 md:gap-24">
        {/* Profile Image on the Right */}
        <div className="flex-shrink-0">
          <img
            src={profile}
            alt="Daberechi Levi Nwachukwu"
            className="rounded-full w-[27rem] h-[25rem]"
          />
        </div>

        {/* Hero Text Content on the Left */}
        <div className="text-center md:text-left max-w-2xl">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hi, I am Daberechi Levi Nwachukwu
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl font-semibold mt-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I'm a Software Developer
          </motion.h2>

          <p className="mt-4 text-gray-300 text-base leading-relaxed">
            I help businesses promote their online presence through building
            technology-powered solutions including e-commerce websites and web
            applications engineered for scalability and growth, and to drive
            sales.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start mt-5 space-x-4">
            <a
              href="https://www.linkedin.com/in/nd-levi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl text-white hover:text-blue-500" />
            </a>
            <a
              href="https://wa.me/qr/YRXSF4SSQUCHK1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-2xl text-white hover:text-green-400" />
            </a>
            <a
              href="https://www.instagram.com/dabs_levi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl text-white hover:text-pink-400" />
            </a>
            <a
              href="https://github.com/IvelDabs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl text-white hover:text-gray-400" />
            </a>
          </div>

          {/* CTA Button */}
          <Link to="contact" smooth={true} duration={500}>
            <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
