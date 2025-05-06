/* eslint-disable @typescript-eslint/no-unused-vars */
// Sure, here's the content for the file /portfolio-website/portfolio-website/src/components/Skills.tsx:

import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SkillsCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const frontendSkills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Tailwind CSS", icon: <FaReact /> }, // Replace with appropriate icon
    { name: "TypeScript", icon: <FaReact /> }, // Replace with appropriate icon
  ];

  const backendSkills = [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <FaReact /> }, // Replace with appropriate icon
    { name: "PostgreSQL", icon: <FaDatabase /> },
    { name: "MongoDB", icon: <FaDatabase /> },
    { name: "Prisma", icon: <FaReact /> }, // Replace with appropriate icon
    { name: "REST APIs", icon: <FaReact /> }, // Replace with appropriate icon
    { name: "JWT", icon: <FaReact /> }, // Replace with appropriate icon
  ];
  const skillStyle = {
    container: "flex flex-col items-center",
    icon: "text-4xl mb-2",
    name: "text-sm font-medium mt-2", // Added margin-top for spacing
  };
  return (
    <div className="skills-carousel text-center flex flex-col items-center justify-center">
      <div className="mb-8 w-full max-w-4xl mb-35">
        <h3 className="font-semibold text-lg mb-4">Frontend Technologies</h3>
        <Slider {...{ ...settings, autoplay: true, autoplaySpeed: 3000 }}>
          {frontendSkills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center">
              <div className="text-4xl mb-2">{skill.icon}</div>
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </Slider>
      </div>
      <div className="w-full max-w-4xl mt-35">
        <h3 className="font-semibold text-lg mb-4">Backend Technologies</h3>
        <Slider {...{ ...settings, autoplay: true, autoplaySpeed: 3000 }}>
          {backendSkills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center">
              <div className="text-4xl mb-2">{skill.icon}</div>
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SkillsCarousel;
