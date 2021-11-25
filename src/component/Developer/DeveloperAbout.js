import React, { Component } from "react";
import {
  SiNestjs,
  SiPostgresql,
  SiPhp,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiAngular,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiJava,
  SiThreedotjs,
  SiAndroid,
  SiIos,
} from "react-icons/si";
import { CgDatabase } from "react-icons/cg";
import { MdOutlineDevicesOther } from "react-icons/md";

class DeveloperAbout extends Component {
  render() {
    return (
      <section className="dev_about_area" id="about">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-lg-6">
              <div className="dev_about_content">
                <React.Fragment>
                  <h6>Powered by</h6>
                  <h2>Passion, {"\n"} Soul & Heart</h2>
                  <h5>Every great design begin with an even better story</h5>
                  <p>
                    I've been a computer since all my life. Ever since i got my
                    first computer at age 10, I've been doing busy experimenting
                    with coding, graphics and modeling. This natural curiosity
                    for technology taught me to get stuff done. Let's get it up
                    together and build great things.
                  </p>
                </React.Fragment>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="dev_skill_item mb-4">
                <div className="item">
                  <h3>Back-end & Hosting</h3>
                  <p>
                    An important, often overlooked part of a system, but I won't
                    let that happen.
                  </p>
                  <span>
                    <SiNestjs />
                  </span>
                  <span>
                    <SiPostgresql />
                  </span>
                  <span>
                    <SiNextdotjs />
                  </span>
                  <span>
                    <SiPhp />
                  </span>
                  <span className={`icon`}>
                    <CgDatabase />
                  </span>
                </div>
              </div>
              <div className="dev_skill_item my-4">
                <div className="item">
                  <h3>Front-end & Design</h3>
                  <p>
                    Building simple, powerful and intuitive things is my thing.
                  </p>
                  <span>
                    <SiReact />
                  </span>
                  <span>
                    <SiAngular />
                  </span>
                  <span>
                    <SiJava />
                  </span>
                  <span>
                    <SiJavascript />
                  </span>
                  <span>
                    <SiTypescript />
                  </span>
                  <span>
                    <SiHtml5 />
                  </span>
                  <span>
                    <SiCss3 />
                  </span>
                  <span>
                    <SiThreedotjs />
                  </span>
                  <span>
                    <SiAndroid />
                  </span>
                  <span>
                    <SiIos />
                  </span>
                  <span className={`icon`}>
                    <MdOutlineDevicesOther />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default DeveloperAbout;
