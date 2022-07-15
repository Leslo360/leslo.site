import React from "react";
import { about } from "../../data";
import ReactTooltip from "react-tooltip";
import Lottie from "react-lottie";
import * as animationData from "../../lotties/yoga-developer.json";

export default function About() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <div className="bg-container">
        <section className="about">
          <div className="content">
            <h1>
              Know Who <span> I Am </span>
            </h1>
            <p>{about.aboutMe}</p>

            <ul>
              {about.hobbies.map((hobby) => (
                <li>
                  <i className="fa fa-angle-right"></i> {hobby}
                </li>
              ))}
            </ul>

            <span className="quote">"{about.quote}"</span>
          </div>

          <Lottie options={defaultOptions} height="50vh" width="30vw" />
        </section>
      </div>
      <section className="skillset">
        <div className="container">
          <ReactTooltip place="top" type="light" effect="solid" />
          <h1>
            Technical <span>Skillset</span>
          </h1>
          <div className="icons-container">
            {about.skills.map((skill) => (
              <i data-tip={skill} className={`devicon-${skill}-plain `}></i>
            ))}
          </div>
        </div>
        <div className="container">
          <h1>
            <span>Tools</span> I use
          </h1>
          <div className="icons-container tools">
            {about.tools.map((tool) => (
              <i data-tip={tool} className={`devicon-${tool}-plain `}></i>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
