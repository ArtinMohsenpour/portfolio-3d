import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { styles } from "../style";

import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ title, text, index }) => {
  return (
    <Tilt className="bg-[#1d1836] xs:w-[450px] w-full left-12">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.7)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-[#1d1836] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <Tilt>
            <h3 className="text-white   text-center text-[24px] font-bold">
              {title}
            </h3>
          </Tilt>

          <div className="xs:w-[450px] w-full  xs:flex xs:flex-row xs:flex-wrap flex flex-row flex-wrap  justify-center px-1 mx-1 text-white  text-[18px] ">
            {text.map((skill) => (
              <Tilt className="bg-white/10 m-1 px-1 rounded-sm">{skill}</Tilt>
            ))}
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Tech = () => {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "redux",
    "hooks",
    "Rest APIs",
    "TypeScript",
    "Python",
    "JQUERY",
    "Next.js",
    "Three.js",
    "Git, GitHub",
    "Datatypes",
    "Bootstrap",
    "SASS",
    "Tailwind",
    "Figma",
    "Adobe XD",
    "UI",
  ];
  const softSkills = [
    "Responsive Design",
    "Communication",
    "E-Commerce",
    "Problem-Solving",
    "Team Collaboration",
    "Time Management",
    "Attention to Detail",
    "Accountability",
  ];
  // const skills =
  //   "HTML5, CSS3, JavaScript , React, redux, hooks, Rest APIs , TypeScript, Python, JQUERY, Three.js , Git, GitHub, Next.js, Datatypes , Bootstrap, SASS, Tailwind, Figma, Adobe XD, UI";
  // const softSkills2 =
  //   "Responsive Design, Communication, E-Commerce, Problem-Solving,Team Collaboration, Time Management, Attention to Detail, Accountability";

  return (
    <div>
      <motion.div
        variants={textVariant()}
        className="mb-4 pb-6 sm:mt-10 sm:pt-10 md:mt-0 md:pt-0  sm:py-8"
      >
        <p className={styles.sectionSubText}>What technologies do I know?</p>
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((tech, index) => (
          <div className="w-28 h-28" key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
        ))}

        <div className="flex  flex-wrap text-justify gap-10 ml-0 mt-2 md:mt-10 justify-center">
          <ServiceCard title="Skills" text={skills} index="1" />
          <ServiceCard title="Soft Skills" text={softSkills} index="2" />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
