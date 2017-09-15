import React from "react";
import ReactDOM from "react-dom";
import Link from "gatsby-link";
import styled from "styled-components";
import {
  TweenMax,
  Bezier,
  TweenLite,
  Power3,
  Sine,
  ScrollToPlugin
} from "gsap";
import store from "store";
import smoothScroll from "smoothscroll";

import ripple from "../utils/splash";
import getDuration from "../utils/getDuration";
import Section from "../components/Section";
import data from "../data";

let br = data.projects[0];

const HeroImage = styled.div`
  background-image: url(${br.hero});
  background-size: cover;
  background-position: center;
  height: calc(40vw + 100px);
  position: relative;
  z-index: 200;
  visibility: ${props => (props.inTransition ? "hidden" : "visible")};
`;

class BadRacket extends React.Component {
  constructor() {
    super();
    this.state = {
      inTransition: false
    };
  }

  componentDidMount() {
    let el = this.refs.content;
    TweenMax.fromTo(
      el,
      0.6,
      { opacity: 0 },
      { opacity: 1, delay: 0.2 },
      Sine.easeIn
    );
  }

  animateBack = e => {
    console.log('animate back called');
    let body = document.body;
    let { top, left, width, height } = store.get("lastClickedProject");
    let hero_original = ReactDOM.findDOMNode(this.refs.hero);
    let {
      top: t,
      left: l,
      width: w,
      height: h
    } = hero_original.getBoundingClientRect();
    let el = hero_original.cloneNode();
    el.style.cssText = `z-index:200; position: fixed; top:${t}px; left:${l}px; width:${w}px; height:${h}px;`;
    body.append(el);

    // only set original element to 'visibility: hidden' once the clone has been made
    this.setState({ inTransition: true });

    let duration = getDuration(t, top);
    ripple(e, duration, "#96D2E0");

    TweenMax.to(el, duration, {
      bezier: {
        curviness: 0.25,
        values: [
          { x: l, y: t, width: w, height: h },
          { x: left / 1.5, y: top, width: width + 100, height: height + 50 },
          { x: left, y: top, width: width, height: height }
        ]
      },
      ease: Sine.easeInOut,
      autoRound: false
    });

    // redirect to home page
    setTimeout(() => {
      window.history.back();
      setTimeout(function() {
        el.remove();
      }, 1000);
    }, duration * 1000);
  };

  back = e => {
    if (window.scrollY > 0) {
      let scrollDuration =  getDuration(0, window.scrollY)
      console.log('scroll duration', scrollDuration);
      smoothScroll(0, scrollDuration*1000, ()=>{this.animateBack(e)});
    } else {
      this.animateBack(e);
    }
  };

  render() {
    return (
      <div style={{ backgroundColor: br.bgColor }}>
        <HeroImage ref="hero" inTransition={this.state.inTransition} />

        <div onClick={this.back}>Back</div>

        <div ref="content">
          <Section>
            <div className="soft-right">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit. Neque porro quisquam est, qui
                dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                sed quia non numquam eius modi tempora incidunt ut labore et
                dolore magnam <Link to="/page-2/">goto page 2</Link> aliquam
                quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam.
              </p>
            </div>
          </Section>
          <Section color="darkgray">
            <div className="soft-right">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit. Neque porro quisquam est, qui
                dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                sed quia non numquam eius modi tempora incidunt ut labore et
                dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
                veniam, quis nostrum exercitationem ullam corporis suscipit
                laboriosam.
              </p>
            </div>
          </Section>
          <Section color="gray">
            <div className="soft-right">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit. Neque porro quisquam est, qui
                dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                sed quia non numquam eius modi tempora incidunt ut labore et
                dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
                veniam, quis nostrum exercitationem ullam corporis suscipit
                laboriosam.
              </p>
            </div>
          </Section>
          <Section color="darkgray">
            <div className="soft-right">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit. Neque porro quisquam est, qui
                dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                sed quia non numquam eius modi tempora incidunt ut labore et
                dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
                veniam, quis nostrum exercitationem ullam corporis suscipit
                laboriosam.
              </p>
            </div>
          </Section>
        </div>
      </div>
    );
  }
}

export default BadRacket;
