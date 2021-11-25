import React, { Component } from "react";

// import React from "react";
import Navbar from "./component/Navbar/Navbar";
import ParticlesBanner from "./component/Banner/ParticlesBanner";
import ServiceTwo from "./component/ServiceTwo";
import Portfolio from "./component/Portfolio/Portfolio";
import MapContainer from "./component/Map";
import Contact from "./component/Contact";
import Skill from "./component/Skill/Skill";
import Footer from "./component/Footer";
import ClientslogoTwo from "./component/ClientslogoTwo";

class App extends Component {
  render() {
    return (
      <div className="body_wrapper">
        <Navbar mClass="dark_menu" mContainer="custome_container" />
        <ParticlesBanner />
        <ClientslogoTwo />
        <ServiceTwo />
        <Portfolio pClass="bg_color" />
        <Skill cClass="bg_w" />
        <MapContainer />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
