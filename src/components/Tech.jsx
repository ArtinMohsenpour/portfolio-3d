import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((tech, index) => (
        <div className="w-28 h-28" key={tech.name}>
          <BallCanvas icon={tech.icon} />
        </div>
      ))}
      <div>
        <h2>Skills: </h2>
        <p>
          <span> • HTML, CSS, JavaScript </span> <br />
          <span> • React, redux, hooks, Rest APIs </span>
          <br />
          <span> • TypeScript, Python, JQUERY, Three.js </span>
          <br />
          <span> • Git, GitHub, Next.js, Datatypes </span>
          <br />
          <span> • Bootstrap, SASS, Tailwind, Figma, Adobe XD, UI and UX </span>
          <br />
          <span>
            {" "}
            Soft skills: Responsive Design, Communication, E-Commerce,
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
