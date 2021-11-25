import React, { Component } from "react";
import SectionTitleTwo from "../component/Banner/SectionTitleTwo";
class ClientslogoTwo extends Component {
  render() {
    return (
      <div className="clients_logo_area_two bg_color">
        <div className="c_round"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="clients_content_two">
                <SectionTitleTwo
                  stitle="Powered by"
                  btitle="Passion, Hard Work & discipline."
                />
                <p>
                  I've been a computer since all my life. Ever since i got my
                  first computer at age 10, I've been doing busy experimenting
                  with coding, graphics and modeling. This natural curiosity for
                  technology taught me to get stuff done. Let's get it up
                  together and build great things.
                </p>
                <div className="clients_item">
                  <h2>18+</h2>
                  <h6>Frameworks</h6>
                </div>
                <div className="clients_item">
                  <h2>10+</h2>
                  <h6>Programming Languages</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="clients_intrigration">
                <a href=".#" className="c_items">
                  <img
                    src={require("../image/angular.png")}
                    alt="Angular Logo for development"
                  />
                </a>
                <a href=".#" className="c_items">
                  <img
                    src={require("../image/typeorm.png")}
                    alt="typeorm Logo for development"
                  />
                </a>
                <a href=".#" className="c_items">
                  <img
                    src={require("../image/pwa.png")}
                    alt="Progressive Web App Logo for development"
                  />
                </a>
                <a href=".#" className="c_items middle">
                  <img
                    src={require("../image/react.png")}
                    alt="React Logo for development"
                  />
                </a>
                <a href=".#" className="c_items">
                  <img
                    src={require("../image/ios.png")}
                    alt="IOS Logo for development"
                  />
                </a>
                <a href=".#" className="c_items">
                  <img
                    src={require("../image/android.png")}
                    alt="Android Logo for development"
                  />
                </a>
                <a href=".#" className="c_items">
                  <img
                    src={require("../image/nestjs.png")}
                    alt="Nest.js Logo for development"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ClientslogoTwo;
