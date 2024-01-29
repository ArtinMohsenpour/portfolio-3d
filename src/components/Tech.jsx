import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

import { motion } from "framer-motion";

import { styles } from "../style";

import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
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
        <div className="flex flex-wrap mr-8 w-auto text-justify pl-0 ml-0 md:justify-center">
          <h2 className="h text-justify text-secondary text-2xl ">Skills: </h2>
          <br />
          <p className=" text-justify text-wrap ml-8  text-secondary text-[17px] max-w-3xl leading-[30px]">
            <span> • HTML, CSS, JavaScript </span>
            <span>, React, redux, hooks, Rest APIs</span>
            <span>, TypeScript, Python, JQUERY, Three.js</span>
            <span>, Git, GitHub, Next.js, Datatypes</span>
            <span>
              , Bootstrap, SASS, Tailwind, Figma, Adobe XD, UI and UX
            </span>{" "}
            <h2 className="h text-justify mt-6  -ml-10 text-secondary text-2xl ">
              Soft Skills:{" "}
            </h2>
            Responsive Design, Communication, E-Commerce, Problem-Solving, Team
            Collaboration, Time Management, Attention to Detail, Accountability
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
