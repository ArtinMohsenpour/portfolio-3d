// import React from "react";
// import { Tilt } from "react-tilt";
// import { motion } from "framer-motion";
// import { styles } from "../style";
// import { services } from "../constants";
// import { fadeIn, textVariant } from "../utils/motion";
// import { SectionWrapper } from "../hoc";

import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

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
      <motion.div variants={textVariant()} className="mt-20 pt-20 ml-8">
       
      </motion.div>
      <div className="flex flex-wrap">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-8 ml-10 flex text-justify text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Motivated and highly adaptable junior web developer with a strong
          educational background in Web development and a passion for
          programming. Experienced in a variety of programming languages,
          including Python, JavaScript and React, with a focus on frontend web
          development. Eager to leverage my technical skills and academic
          knowledge to contribute effectively to web development projects. I'm
          looking for the right opportunity to prove my skills and develop my
          career and become a professional full stack developer.
        </motion.p>
        <div className="hero-container flex">
          <div className="flex">
            <div className="image-container flex"></div>
          </div>
        </div>
      </div>
      <div className=" flex flex-wrap gap-10 ml-20">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

// export default SectionWrapper(About, "about");
export default SectionWrapper(About, "about");
