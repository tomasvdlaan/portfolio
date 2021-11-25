import React, { Component } from "react";
import Reveal from "react-reveal/Reveal/";
import Form from "./Form";
import SectionTitleTwo from "./Banner/SectionTitleTwo";

class Contact extends Component {
  render() {
    return (
      <section className="contact-area" id="contact">
        <div className="container">
          <div className="row row-reverse">
            <React.Fragment>
              <div className="col-md-5">
                <Reveal effect="fadeInLeft" duration={500}>
                  <div className="get_info">
                    <SectionTitleTwo
                      stitle="Get in Touch"
                      btitle="Talk or Meet with Me"
                    />
                    <div className="media get_item">
                      <i className="flaticon-chat"></i>
                      <div className="media-body">
                        <h6>Contact Me</h6>
                        <a href="mailto:info@tomasvdlaan.nl">
                          info@tomasvdlaan.nl
                        </a>
                      </div>
                    </div>
                    <div className="media get_item">
                      <i className="flaticon-pin"></i>
                      <div className="media-body">
                        <h6>Get Me Here</h6>
                        <p>Eindhoven, The Netherlands</p>
                      </div>
                    </div>
                    <div className="media get_item">
                      <i className="flaticon-sound"></i>
                      <div className="media-body">
                        <h6>Listen To Me</h6>
                        <a href="https://www.tomasvdlaan.nl">tomasvdlaan.nl</a>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </React.Fragment>
            <div className="col-md-7">
              <Reveal effect="fadeInRight" duration={800}>
                <div className="input_form">
                  <SectionTitleTwo
                    stitle="Contact"
                    btitle="Let me know here Know Here"
                  />
                  <Form />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Contact;
