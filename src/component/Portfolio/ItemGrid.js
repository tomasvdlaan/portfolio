import React, { Component } from "react";
import Isotope from "isotope-layout/js/isotope";
import ImagesLoaded from "imagesloaded/imagesloaded";

class ItemGrid extends Component {
  state = {
    activeItem: "*",
  };

  componentDidMount() {
    var imgLoad = new ImagesLoaded(".grid");

    imgLoad.on("progress", function (instance, image) {
      this.iso = new Isotope(".grid", {
        itemSelector: ".grid-item",
        layoutMode: "masonry",
      });
    });
  }
  onFilterChange = (newFilter) => {
    this.setState({ activeItem: newFilter });
    if (this.iso === undefined) {
      this.iso = new Isotope(".grid", {
        itemSelector: ".grid-item",
        layoutMode: "masonry",
      });
    }

    // this.iso.arrange({ filter: newFilter });

    if (newFilter === "*") {
      this.iso.arrange({ filter: `*` });
    } else {
      this.iso.arrange({ filter: `.${newFilter}` });
    }
  };

  onActive = (v) => (v === this.state.activeItem ? "active" : "");
  render() {
    return (
      <div>
        <ul className="list_style portfolio_menu text-center">
          <li
            className={`${this.onActive("*")}`}
            data-wow-delay="0.1s"
            data-filter="*"
            onClick={() => {
              this.onFilterChange("*");
            }}
          >
            ALL
          </li>
          <li
            className={`${this.onActive("web")}`}
            data-wow-delay="0.3s"
            data-filter="web"
            onClick={() => {
              this.onFilterChange("web");
            }}
          >
            Web Design
          </li>
          <li
            className={`${this.onActive(`native`)}`}
            data-wow-delay="0.6s"
            data-filter="develop"
            onClick={() => {
              this.onFilterChange("native");
            }}
          >
            App Development
          </li>
        </ul>

        <div className="grid row">
          <div className="col-md-3 col-sm-6 col-xs-12 grid-item web">
            <div className="portfolio hover-style">
              <img src={require("../../image/portfolio/agency.png")} alt="" />
              <div className="item-img-overlay">
                <div className="overlay-info text-center">
                  <span className="title h2">Shenzhen Agency</span>
                  <p className="px-4">
                    <a href="">Shenzhen Agency</a> is a PHP website, B2B.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12 grid-item web">
            <div className="portfolio hover-style">
              <img
                src={require("../../image/portfolio/antalyagids.png")}
                alt=""
              />
              <div className="item-img-overlay">
                <div className="overlay-info text-center">
                  <span className="title h2">AntalyaGids.nl</span>
                  <p className="px-4">
                    AntalyaGids.nl is a Wordpress Website about Antalya, Turkey.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12 grid-item web">
            <div className="portfolio hover-style">
              <img src={require("../../image/portfolio/cartsurf.png")} alt="" />
              <div className="item-img-overlay">
                <div className="overlay-info text-center">
                  <span className="title h1">CartSurf</span>
                  <p className="px-4">
                    CartSurf is a Angular Web Application managing repair stores
                    and webshops.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12 grid-item native">
            <div className="portfolio hover-style">
              <img src={require("../../image/portfolio/plantpal.png")} alt="" />
              <div className="item-img-overlay">
                <div className="overlay-info text-center">
                  <span className="title h1">PlantPal</span>
                  <p className="px-4">
                    PlantPal is a React Native Application for IOS and Android
                    to track, and optimize plant growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12 grid-item web">
            <div className="portfolio hover-style">
              <img src={require("../../image/portfolio/wirless.png")} alt="" />
              <div className="item-img-overlay">
                <div className="overlay-info text-center">
                  <span className="title h1">Wirless</span>
                  <p className="px-4">
                    Wirless is my own company, focussed on board repair.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12 grid-item native web">
            <div className="portfolio hover-style">
              <img
                src={require("../../image/portfolio/newproject.png")}
                alt=""
              />
              <div className="item-img-overlay">
                <div className="overlay-info text-center">
                  <span className="title h2">Our new project together?</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemGrid;
