import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

import { motion } from "framer-motion";

import { styles } from "../style";

import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      <motion.div
        variants={textVariant()}
        className="sm:mt-20 sm:pt-20 md:mt-0 md:pt-2"
      >
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Experience</h2>
      </motion.div>
      <div>
        {technologies.map((tech, index) => (
          <div className="w-28 h-28" key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div>
      <div className="flex flex-wrap w-auto text-left pl-0 ml-0 md:justify-center">
        <h2 className="h text-justify text-secondary text-2xl">Skills: </h2>
        <br />
        <p className=" ml-10 text-left text-secondary text-[17px] max-w-3xl leading-[30px]">
          <span> • HTML, CSS, JavaScript </span> <br />
          <span> • React, redux, hooks, Rest APIs </span>
          <br />
          <span> • TypeScript, Python, JQUERY, Three.js </span>
          <br />
          <span> • Git, GitHub, Next.js, Datatypes </span>
          <br />
          <span> • Bootstrap, SASS, Tailwind, Figma, Adobe XD, UI and UX </span>
          <br />
          <br />
          <span>
            {" "}
            <span className="text-[20px]"> Soft skills:</span> Responsive
            Design, Communication, E-Commerce,
          </span>
          <br />
          <span>
            {" "}
            Problem-Solving, Team Collaboration, Time Management, Attention to
          </span>
          <br />
          <span> Detail, Accountability</span>
          <br />
        </p>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
