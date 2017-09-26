import React from "react";
import NavItem from "../components/NavItem";
import Waypoint from "react-waypoint";
import { injectGlobal, styled } from "styled-components";
import _ from "lodash";
import { TweenMax, Sine } from "gsap";
import smoothScroll from "smoothscroll";

import Nav from "../components/Nav";
import Section from "../components/Section";
import ProjectImage from "../components/ProjectImage";
import Hr from "../components/Hr";
import Box from "../components/Box";
import NavHelper from "../components/NavHelper";

import data from "../data";
import s from "./index.module.styl";
import { colors } from "../styles/vars.json";

class IndexPage extends React.Component {
  constructor() {
    super();
    this.state = {
      nav: data.nav,
      navCurrent: null,
      navNext: null,
      navPrev: null
    };
  }

  componentWillMount = () => {
    this.updateState();
  };

  componentDidMount = () => {
    document.addEventListener("keydown", event => {
      let c = event.code;
      if (c == "ArrowDown" || c == "KeyJ" || c == "Space") {
        event.preventDefault();
        this.scrollTo(this.state.navNext.name);
        let next = this.refs.next;
      } else if (c == "ArrowUp" || c == "KeyK") {
        event.preventDefault();
        this.scrollTo(this.state.navPrev.name);
      }
    });
  };

  updateState = () => {
    this.setState(
      {
        navCurrent: _.find(this.state.nav, i => i.active)
      },
      () => {
        let currIdx = this.state.nav.indexOf(this.state.navCurrent);
        this.setState({
          navNext: this.state.nav[currIdx + 1] || null,
          navPrev: this.state.nav[currIdx - 1] || null
        });
      }
    );
  };

  updateNav(targetNavName, o) {
    // preventing erroneous display of work section
    if (targetNavName == "work" && o.previousPosition == "above") {
      return;
    }

    let currActive = this.state.navCurrent;
    let targetNavItem = _.find(this.state.nav, el => el.name == targetNavName);

    if (currActive.name != targetNavItem.name) {
      this.state.nav.forEach(el => (el.active = false));
      targetNavItem.active = true;
      this.animateOut();
      setTimeout(() => {
        this.updateState();
      }, 300);
    }
  }

  animateOut = () => {
    let els = [this.refs.chapterContent];

    // reduces flicker when scrolling quickly
    TweenMax.killTweensOf(els);

    TweenMax.fromTo(
      els,
      0.3,
      { opacity: 1, y: 0 },
      { opacity: 0, y: -10 },
      Sine.easeIn
    );
  };

  scrollTo = item => {
    let destination = document.querySelector(`#${item}`);
    smoothScroll(destination);
  };

  render() {
    let currActive = this.state.navCurrent;
    let titleText = this.state.navCurrent.titleText;
    let copyText = this.state.navCurrent.copyText;

    let prev = this.state.navPrev;
    let next = this.state.navNext;

    let chapterContent = [this.refs.chapterContent];
    let title = [this.refs.title];
    let about = [this.refs.about_text];
    let hand = [this.refs.hand];

    // reduces flicker when scrolling quickly
    TweenMax.killTweensOf([title, about]);

    // re-show chapterContent after animating out
    TweenMax.to(chapterContent, 0, { opacity: 1, y: 0 });

    // animate title
    TweenMax.fromTo(
      title,
      0.35,
      { opacity: 0, y: -8 },
      { opacity: 1, y: 0, delay: 0.0 },
      Sine.easeIn
    );

    // animate copy text
    TweenMax.fromTo(
      about,
      0.9,
      { opacity: 0, y: -20 },
      { opacity: 0.8, y: 0, delay: 0.6 },
      Sine.easeIn
    );

    // animate hand
    // TODO: get this to only run once
    var tl = new TimelineMax();
    tl
      .to(hand, 1, {
        transform: "rotate(0deg)",
        transformOrigin: "center bottom"
      })
      .to(hand, 0.6, {
        transform: "rotate(-20deg)",
        transformOrigin: "center bottom"
      })
      .to(hand, 0.5, {
        transform: "rotate(20deg)",
        transformOrigin: "center bottom"
      })
      .to(hand, 0.4, {
        transform: "rotate(-15deg)",
        transformOrigin: "center bottom"
      })
      .to(hand, 0.3, {
        transform: "rotate(10deg)",
        transformOrigin: "center bottom"
      })
      .to(hand, 0.3, {
        transform: "rotate(0deg)",
        transformOrigin: "center bottom"
      });

    let debounced_updateNav = _.bind(
      _.debounce(this.updateNav, 300, { trailing: true }),
      this
    );

    return (
      <div>
        <Section chapter color={colors.red}>
          <div ref="chapterContent" className={s.flexInherit}>
            <NavHelper target={prev} direction="prev" />

            <div>
              <h1 ref="title" className={s.title}>
                {currActive.name == "about" && (
                  <svg
                    ref="hand"
                    viewBox="0 0 53 66"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      fill: colors.asphalt,
                      width: "1em",
                      height: "1em"
                    }}
                  >
                    <path d="M.9 20v-2.8c0-3.5 2.9-6.4 6.4-6.4.8 0 1.5.1 2.2.4V9.7c0-3.5 2.9-6.4 6.4-6.4 1.1 0 2.1.3 2.9.7C19.9 1.9 22 .5 24.5.5s4.7 1.4 5.7 3.5c.9-.5 1.9-.7 2.9-.7 3.5 0 6.4 2.9 6.4 6.4v26.9l2.3-4.1c.9-1.5 2.2-2.6 3.9-3 1.6-.4 3.3-.1 4.7.8 2.4 1.5 3.1 4.9 1.9 8.6-.3.7-6.3 17.9-13.5 25-.4.4-.9.6-1.5.6-.5 0-1.1-.2-1.5-.6-.8-.8-.8-2.2 0-3 6.4-6.4 12.2-22.7 12.5-23.4.5-1.7.4-3.3-.2-3.7-.4-.3-1-.4-1.4-.2-.5.1-1 .5-1.3 1l-6.3 10.9c-.5.8-1.4 1.2-2.4 1-.9-.2-1.6-1.1-1.6-2V9.8c0-1.2-1-2.2-2.2-2.2-1.2 0-2.2 1-2.2 2.2v24.1c0 1.2-.9 2.1-2.1 2.1-1.2 0-2.1-.9-2.1-2.1V6.8c0-1.2-1-2.2-2.2-2.2-1.2 0-2.2 1-2.2 2.2v23.4c0 1.2-.9 2.1-2.1 2.1-1.2 0-2.1-.9-2.1-2.1V9.6c0-1.2-1-2.2-2.2-2.2-1.2 0-2.2 1-2.2 2.2v22.5c0 1.2-.9 2.1-2.1 2.1-1.2 0-2.1-.9-2.1-2.1V17.2c0-1.2-1-2.2-2.2-2.2-1.2 0-2.2 1-2.2 2.2V20c-.3 9.3.1 35.1 5.8 42.2.7.9.6 2.2-.3 3-.4.3-.9.5-1.3.5-.6 0-1.2-.3-1.6-.8C-.2 55.2.8 21.8.9 20zm30.5 21.9c-.8-.8-2.1-.8-3 0-.4.4-8.7 8.8-7.6 20.6.1 1.1 1 1.9 2.1 1.9h.2c1.2-.1 2-1.1 1.9-2.3-.9-9.8 6.3-17.2 6.4-17.3.9-.8.9-2.1 0-2.9z" />
                  </svg>
                )}

                {titleText.split("\n").map((item, key) => {
                  return (
                    <span key={key}>
                      {item} <br />{" "}
                    </span>
                  );
                })}
              </h1>

              <div
                ref="about_text"
                className={s.about}
                style={{ opacity: 0.5 }}
              >
                <p>{copyText}</p>
              </div>
            </div>

            <NavHelper target={next} direction="next" />
          </div>
        </Section>

        <Waypoint
          topOffset="-50%"
          onEnter={o => debounced_updateNav("about", o)}
        />

        <Section id="about" chapterContent>
          <div className={s.headshotWrapper}>
            <div className={s.headshot} />
          </div>
        </Section>

        <Waypoint
          bottomOffset="50%"
          onEnter={o => {
            debounced_updateNav("work", o);
          }}
        >
          <Section id="work" chapterContent>
            {data.projects.map((p, idx) => (
              <ProjectImage
                key={idx}
                image={p.hero}
                path={p.path}
                pageColor={p.bgColor}
              />
            ))}
          </Section>
        </Waypoint>

        <Waypoint
          bottomOffset="50%"
          onEnter={o => debounced_updateNav("contact", o)}
          onLeave={o => debounced_updateNav("work", o)}
        >
          <Section id="contact" chapterContent style={{ height: "100vh" }}>
            <div style={{ padding: "2em 4vw" }}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
                dolores corrupti sint ab maiores, ipsam optio ipsum magnam eius
                assumenda perferendis, facere sed corporis, dignissimos
                doloribus officiis. Doloremque, impedit ratione.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
                dolores corrupti sint ab maiores, ipsam optio ipsum magnam eius
                assumenda perferendis, facere sed corporis, dignissimos
                doloribus officiis. Doloremque, impedit ratione.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
                dolores corrupti sint ab maiores, ipsam optio ipsum magnam eius
                assumenda perferendis, facere sed corporis, dignissimos
                doloribus officiis. Doloremque, impedit ratione.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
                dolores corrupti sint ab maiores, ipsam optio ipsum magnam eius
                assumenda perferendis, facere sed corporis, dignissimos
                doloribus officiis. Doloremque, impedit ratione.
              </p>
            </div>
          </Section>
        </Waypoint>
      </div>
    );
  }
}

export default IndexPage;
