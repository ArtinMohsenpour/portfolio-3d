// import React from "react";
// import { Tilt } from "react-tilt";
// import { motion } from "framer-motion";
// import { styles } from "../style";
// import { services } from "../constants";
// import { fadeIn, textVariant } from "../utils/motion";
// import { SectionWrapper } from "../hoc";

import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import resume from "../assets/resume.pdf";

import { styles } from "../style";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.7)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt="title" className="w-16 h-16 object-contain" />
          <h3 className="text-white text-center text-[20px] font-bold">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className="mt-[6rem] ml-4 md:mx-0 md:ml-10  sm:mt-20 pt-[7rem] sm:pt-20  justify-center"
      >
        <p className={styles.sectionSubText}>Introduction</p>
        {/* <h2 className={styles.sectionHeadText}>Experience</h2> */}
      </motion.div>
      <div className="flex flex-wrap justify-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 mb-8 mx-4 md:mx-0 md:ml-10 flex text-justify text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I have experience in a variety of programming languages, including
          Python, JavaScript, and React, with a focus on front-end web
          development. Experienced using APIs, data types, Next.js, and UI/UX.
          Eager to leverage my technical skills and academic knowledge to
          contribute effectively to the team to improve web development
          projects. With a commitment to continuous learning and staying up to
          date with the latest industry trends, I am constantly striving to
          enhance my skills and deliver top-notch results.
        </motion.p>

        <div className="image-container my-6 flex justify-center w-full"></div>
      </div>
      <div className=" flex flex-wrap gap-10 ml-0 mt-8 md:mt-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

// export default SectionWrapper(About, "about");
export default SectionWrapper(About, "about");
