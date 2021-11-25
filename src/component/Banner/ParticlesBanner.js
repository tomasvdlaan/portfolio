import React, { Component } from "react";
import Particles from "./Particles";
import Reveal from "react-reveal/Reveal/";
import Typer from "./Typer";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

class ParticlesBanner extends Component {
  render() {
    return (
      <section id="home">
        <div className="banner_area_two">
          <div
            className="one_img"
            data-parallax='{"x": 0, "y": 100, "rotateZ":0}'
          >
            <img
              className="faa-spin animated"
              src={require("../../image/circle-2.png")}
              alt="Shape Drawing for Background"
            />
          </div>
          <Particles />
          <div className="container">
            <div className="banner_content">
              <Reveal effect="fadeInUp">
                <h2 className="wow fadeInLeft animated">
                  I'm Tomas van der Laan👋
                </h2>
              </Reveal>
              <Reveal effect="fadeInUp" duration={1500}>
                <h3>Creative Designer & Developer based in Eindhoven,</h3>
              </Reveal>
              <Typer
                heading={"Specialized in"}
                dataText={[
                  "Full Stack.",
                  "Native & Web.",
                  "Designing UI/UX.",
                  "Freelancer.",
                ]}
              />
              <ul className="list_style social_icon">
                <li key={"Github"}>
                  <a
                    href={"https://github.com/tomasvdlaan"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsGithub />
                  </a>
                </li>
                <li key={"LinkedIn"}>
                  <a
                    href={"https://www.linkedin.com/in/tomasvdlaan"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li key={"Instagram"}>
                  <a
                    href={"https://www.instagram.com/tomasvdlaan.nl"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsInstagram />
                  </a>
                </li>
                <li key={"Instagram"}>
                  <a
                    href={"mailto:info@tomasvdlaan.nl"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MdAlternateEmail />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ParticlesBanner;
