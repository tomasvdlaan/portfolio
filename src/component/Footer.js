import React, { Component } from "react";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import Fade from "react-reveal/Fade";
class Footer extends Component {
  render() {
    return (
      <section className="footer-area">
        <div className="container">
          <div className="footer-content">
            <Fade top cascade>
              <ul className="list_style social_icon">
                <li>
                  <a
                    href={"https://github.com/tomasvdlaan"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsGithub />
                  </a>
                </li>
                <li>
                  <a
                    href={"https://www.linkedin.com/in/tomasvdlaan"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li>
                  <a
                    href={"https://www.instagram.com/tomasvdlaan.nl"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href={"mailto:info@tomasvdlaan.nl"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MdAlternateEmail />
                  </a>
                </li>
              </ul>
            </Fade>

            <h6>
              Made with love by{" "}
              <a href="https://www.tomasvdlaan.nl">Tomas van der Laan</a>
            </h6>
            <p>
              © {new Date().getFullYear()} Tomasvdlaan - All Rights Reserved
            </p>
          </div>
        </div>
      </section>
    );
  }
}
export default Footer;
