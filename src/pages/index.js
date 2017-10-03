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
import HandSvg from "../components/HandSvg";
import Footer from "../components/Footer";

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
      this.state.nav.forEach(el => (el.active = false)); // deactive all nav items
      targetNavItem.active = true; // and set target to active
      this.animateOut(); // then, animate out
      setTimeout(() => {
        this.updateState(); // update state after animate out finishes
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
      { opacity: 0.7, y: 0, delay: 0.35 },
      Sine.easeIn
    );

    let debounced_updateNav = _.bind(
      _.debounce(this.updateNav, 300, { trailing: true }),
      this
    );

    return (
      <div>


        {/* ** CHAPTER TITLE */}
        <Section chapter color={colors.red}>
          <div ref="chapterContent" className={s.flexInherit}>

            <NavHelper target={prev} direction="prev" handler={this.scrollTo} />

            <div>
              <h1 ref="title" className={s.title}>
                {currActive.name == "about" && <HandSvg />}

                {titleText.split("\n").map((item, key) => {
                  return (
                    <span key={key}>
                      {item} <br />{" "}
                    </span>
                  );
                })}
              </h1>

              <div ref="about_text" className={[s.about, 'hideMobile'].join(' ')}>
                <p>{copyText}</p>
              </div>

            </div>

            <NavHelper target={next} direction="next" handler={this.scrollTo} />
          </div>
        </Section>


        {/* ** CHAPTER CONTENT */}

        <Waypoint
          topOffset="-50%"
          onEnter={o => debounced_updateNav("about", o)}
        />

        {/* ** CHAPTER 1: HEADSHOT */}
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

          {/* ** CHAPTER 2: WORK */}
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
          {/* ** CHAPTER 3: CONTACT */}
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
        <Footer/>
      </div>
    );
  }
}

export default IndexPage;
