import React from "react";
import NavItem from "../components/NavItem";
import Waypoint from "react-waypoint";
import { injectGlobal, styled } from "styled-components";
import Link from "gatsby-link";
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
          <Section id="contact" chapterContent style={{ height: "80vh" }}>
            <div className={s.contactCopy} style={{ padding: "2em 4vw" }}>
              <p>I’m available for new projects.</p>
              <p>Although I’m based in San Francisco, remote teams in Cleveland and NYC have loved working with me. Modern tools have reduced most of the pain points of remote work, and I promise you’ll feel like I’m the office with you.</p>
              <p>I thrive as the member of a focused task force charged with rapidly producing effective product experiences. My experience with complex B2B products at large organizations enables me to work fast to cut the clutter while keeping stakeholders in the loop. </p>
              <p>Hit me up via <strong><a target="_blank" href="mailto:hello@adamwagner.io">hello@adamwagner.io</a></strong>. We’ll schedule time to chat about your business and the opportunities you want to start tackling. </p>
            </div>

            <div>
              <ul className={s.listHorizontal} style={{visibility:'hidden'}}>
                <li>
                  <Link to="/opentable/">OpenTable</Link>
                </li>
                <li>
                  <Link to="/copilot/">Copilot</Link>
                </li>
                <li>
                  <Link to="sounds-just-like/">Sounds Just Like</Link>
                </li>
                <li>
                  <Link to="/badracket/">Bad Racket</Link>
                </li>
              </ul>
            </div>
          </Section>
        </Waypoint>
      </div>
    );
  }
}

export default IndexPage;
