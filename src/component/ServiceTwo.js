import React, { Component } from "react";
import SectionTitleTwo from "../component/Banner/SectionTitleTwo";
import { MdOutlineDraw } from "react-icons/md";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { BsGlobe, BsGoogle } from "react-icons/bs";
class ServiceTwo extends Component {
  render() {
    let { rowFlex } = this.props;
    return (
      <div className="service_area_two" id="service">
        <div className="container">
          <div className={`row align-items-center ${rowFlex}`}>
            <div className="col-lg-5">
              <div className="service_content">
                <SectionTitleTwo
                  stitle="What I do ?"
                  btitle="Innovative solutions to grow your creative projects"
                />
                <p>
                  I’m Tomas, a <span>Full Stack Developer</span> based in
                  Netherlands. I Specialize in Building Progressive Web- and
                  Native Applications. Wanna know more about the services i
                  provide? Check those out:
                </p>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="design-tab"
                      data-toggle="tab"
                      href="#design"
                      role="tab"
                      aria-controls="design"
                      aria-selected="true"
                    >
                      <MdOutlineDraw /> UX, UI & Graphics Design
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="web-tab"
                      data-toggle="tab"
                      href="#web"
                      role="tab"
                      aria-controls="web"
                      aria-selected="false"
                    >
                      <BsGlobe /> Web Development
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="mobile-tab"
                      data-toggle="tab"
                      href="#mobile"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      <HiOutlineDeviceMobile /> Native Applications
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="seo-tab"
                      data-toggle="tab"
                      href="#seo"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      <BsGoogle /> SEO & SEA
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="design"
                  role="tabpanel"
                  aria-labelledby="design-tab"
                >
                  <div className="service_img text-center">
                    <img src={require("../image/design.svg")} alt="" />
                    <p>
                      Having a good design is essential to the success of your
                      digital product. Creating a meaningful, smooth and
                      relevant experience designed to optimize user
                      satisfaction.
                    </p>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="web"
                  role="tabpanel"
                  aria-labelledby="web-tab"
                >
                  <div className="service_img text-center">
                    <img src={require("../image/webdev.svg")} alt="" />
                    <p>
                      With the ever expanding capabilities of browser, web
                      development is as relevant as ever. Progressive Web
                      Applications is a technology utilizing all the goodness
                      modern webbrowsers have to offer.
                    </p>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="mobile"
                  role="tabpanel"
                  aria-labelledby="mobile-tab"
                >
                  <div className="service_img text-center">
                    <img src={require("../image/native.svg")} alt="" />
                    <p>
                      Creating an optimized experience for mobile phones is a
                      whole other game of itself. Notifications, camera and
                      sensor data, device information all potentially add value
                      to your end-product.
                    </p>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="seo"
                  role="tabpanel"
                  aria-labelledby="seo-tab"
                >
                  <div className="service_img text-center">
                    <img src={require("../image/search.svg")} alt="" />
                    <p>
                      Getting found, as a company, can be very hard and often
                      competitive. With a shift from physical to online, ranking
                      high in search engines provides a major advantage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ServiceTwo;
