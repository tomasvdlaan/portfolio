import React, { Component } from "react";
import anime from "animejs/lib/anime.es.js";
import CounterItem from "../Skill/CounterItem";
import Reveal from "react-reveal/Reveal/";

class Skill extends Component {
  componentDidMount() {
    function countup(el, target) {
      let data = { count: 0 };
      anime({
        targets: data,
        count: [0, target],
        duration: 2000,
        round: 1,
        delay: 200,
        easing: "easeOutCubic",
        update() {
          el.innerText = data.count.toLocaleString();
        },
      });
    }

    function makeCountup(el) {
      const text = el.textContent;
      const target = parseInt(text, 10);

      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            countup(el, target);
            io.unobserve(entry.target);
          }
        });
      });

      io.observe(el);
    }

    const els = document.querySelectorAll("[data-countup]");

    els.forEach(makeCountup);
  }
  render() {
    var { cClass } = this.props;
    return (
      <section className={`project_count_area ${cClass}`}>
        <div className="container">
          <Reveal effect="fadeInUp">
            <div className="row">
              <CounterItem
                CText="3000"
                pdescription="Hours Practical Experience"
                icon="briefcase"
              />
              <CounterItem
                CText="8"
                pdescription="Years of Experience"
                icon="calendar"
              />
              <CounterItem
                CText="10"
                pdescription="Programming Languages Taught"
                icon="document"
              />
              <CounterItem
                CText="18"
                pdescription="Frameworks Worked With"
                icon="grid"
              />
            </div>
          </Reveal>
        </div>
      </section>
    );
  }
}
export default Skill;
