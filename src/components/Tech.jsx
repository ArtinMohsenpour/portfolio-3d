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
          <div className="container flex flex-row">
            <div className="container flex flex-row w-7">
              <h2 className="flex text-secondary text-[20px] sm:text-2xl  ">
                Skills:
              </h2>
            </div>
            <br />
            <p className="flex sm:text-justify  ml-[85px]   text-secondary text-[17px] max-w-3xl leading-[30px]">
              HTML, CSS, JavaScript , React, redux, hooks, Rest APIs ,
              TypeScript, Python, JQUERY, Three.js , Git, GitHub, Next.js,
              Datatypes , Bootstrap, SASS, Tailwind, Figma, Adobe XD, UI and UX{" "}
            </p>
            <br />
          </div>
          <div className="container flex flex-row ">
            <div className="container flex flex-row w-7">
              <h2 className=" flex text-secondary  lg:text-[20px] sm:text-2xl  ">
                Soft Skills:
              </h2>
            </div>
            <br />
            <p className=" flex sm:text-justify  ml-[85px]  text-secondary text-[17px] max-w-3xl leading-[30px]">
              Responsive Design, Communication, E-Commerce, Problem-Solving,
              Team Collaboration, Time Management, Attention to Detail,
              Accountability
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
