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

import data from "../data";
import s from "./index.module.styl";
import { colors } from "../styles/vars.json";

class IndexPage extends React.Component {
  constructor() {
    super();
    this.state = {
      nav: data.nav,
      mobile: false
    };
  }

  updateNav(activeItem, o) {
    if (activeItem == "work" && o.previousPosition == "above") {
      console.log("preventing erroneous display of work section");
      return;
    }

    let currActive = _.find(this.state.nav, i => i.active);
    let navItem = _.find(this.state.nav, el => el.name == activeItem);

    if (currActive.name != navItem.name) {
      this.state.nav.forEach(el => (el.active = false));
      navItem.active = true;
      this.animateOut();
      setTimeout(() => {
        this.forceUpdate();
      }, 300);
    }
  }

  animateOut = () => {
    let els = [this.refs.about_text, this.refs.title, this.refs.next, this.refs.prev];

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

  navigate = (item) => {
    console.log(item);
    let destination = document.querySelector(`#${item}`)
    console.log(destination);
    smoothScroll(destination)
  }

  render() {
    let currActive = _.find(this.state.nav, i => i.active);
    let titleText = _.find(this.state.nav, i => i.active).titleText;
    let copyText = _.find(this.state.nav, i => i.active).copyText;

    let currIdx = this.state.nav.indexOf(currActive);
    let prev = this.state.nav[currIdx - 1] || "";
    let next = this.state.nav[currIdx + 1] || "";

    let title = [this.refs.title];
    let about = [this.refs.about_text];
    let hand = [this.refs.hand];

    // reduces flicker when scrolling quickly
    TweenMax.killTweensOf([title, about]);

    TweenMax.fromTo(
      title,
      0.35,
      { opacity: 0, y: -8 },
      { opacity: 1, y: 0, delay: 0.1 },
      Sine.easeIn
    );
    TweenMax.fromTo(
      about,
      0.9,
      { opacity: 0, y: -20 },
      { opacity: 0.7, y: 0, delay: 0.6 },
      Sine.easeIn
    );

    TweenMax.fromTo(
      [this.refs.prev],
      1,
      { opacity: 0, y: -20 },
      { opacity: 0.7, y: 0, delay: 1 },
      Sine.easeIn
    );

    TweenMax.fromTo(
      [this.refs.next],
      1,
      { opacity: 0, y: 20 },
      { opacity: 0.7, y: 0, delay: 1 },
      Sine.easeIn
    );

    var tl = new TimelineMax();
    tl.to(hand, 1, { transform: "rotate(0deg)", transformOrigin:"center bottom"} )
      .to(hand, 0.6, { transform: "rotate(-20deg)", transformOrigin:"center bottom" })
      .to(hand, 0.5, { transform: "rotate(20deg)", transformOrigin:"center bottom" })
      .to(hand, 0.4, { transform: "rotate(-20deg)", transformOrigin:"center bottom" })
      .to(hand, 0.4, { transform: "rotate(20deg)", transformOrigin:"center bottom" })
      .to(hand, 0.4, { transform: "rotate(0deg)", transformOrigin:"center bottom" })

    let debounced_updateNav = _.bind(
      _.debounce(this.updateNav, 500, { trailing: true }),
      this
    );

    return (
      <div>
        <Section
          chapter
          style={{ paddingTop: "1em", backgroundColor: colors.red }}
        >
          <div ref="prev"style={{ flex: "100%", color: colors.asphalt }}>
            {prev &&
              <span onClick={() => {this.navigate(prev.name)}}>↑ {prev.name}</span>
            }
          </div>

          <div>
            <h1 ref="title" className={s.title}>
              {currActive.name == "about" && (
                <svg
                  ref="hand"
                  viewBox="0 0 53 66"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ fill: colors.asphalt, width: "1em", height: "1em" }}
                >
                  <path d="M.9 20v-2.8c0-3.5 2.9-6.4 6.4-6.4.8 0 1.5.1 2.2.4V9.7c0-3.5 2.9-6.4 6.4-6.4 1.1 0 2.1.3 2.9.7C19.9 1.9 22 .5 24.5.5s4.7 1.4 5.7 3.5c.9-.5 1.9-.7 2.9-.7 3.5 0 6.4 2.9 6.4 6.4v26.9l2.3-4.1c.9-1.5 2.2-2.6 3.9-3 1.6-.4 3.3-.1 4.7.8 2.4 1.5 3.1 4.9 1.9 8.6-.3.7-6.3 17.9-13.5 25-.4.4-.9.6-1.5.6-.5 0-1.1-.2-1.5-.6-.8-.8-.8-2.2 0-3 6.4-6.4 12.2-22.7 12.5-23.4.5-1.7.4-3.3-.2-3.7-.4-.3-1-.4-1.4-.2-.5.1-1 .5-1.3 1l-6.3 10.9c-.5.8-1.4 1.2-2.4 1-.9-.2-1.6-1.1-1.6-2V9.8c0-1.2-1-2.2-2.2-2.2-1.2 0-2.2 1-2.2 2.2v24.1c0 1.2-.9 2.1-2.1 2.1-1.2 0-2.1-.9-2.1-2.1V6.8c0-1.2-1-2.2-2.2-2.2-1.2 0-2.2 1-2.2 2.2v23.4c0 1.2-.9 2.1-2.1 2.1-1.2 0-2.1-.9-2.1-2.1V9.6c0-1.2-1-2.2-2.2-2.2-1.2 0-2.2 1-2.2 2.2v22.5c0 1.2-.9 2.1-2.1 2.1-1.2 0-2.1-.9-2.1-2.1V17.2c0-1.2-1-2.2-2.2-2.2-1.2 0-2.2 1-2.2 2.2V20c-.3 9.3.1 35.1 5.8 42.2.7.9.6 2.2-.3 3-.4.3-.9.5-1.3.5-.6 0-1.2-.3-1.6-.8C-.2 55.2.8 21.8.9 20zm30.5 21.9c-.8-.8-2.1-.8-3 0-.4.4-8.7 8.8-7.6 20.6.1 1.1 1 1.9 2.1 1.9h.2c1.2-.1 2-1.1 1.9-2.3-.9-9.8 6.3-17.2 6.4-17.3.9-.8.9-2.1 0-2.9z" />
                </svg>
              )}

              {titleText.split("\n").map((item, key) => {
                return (
                  <span key={key}> {item} <br /> </span>
                );
              })}
            </h1>

            <div ref="about_text" className={s.about} style={{ opacity: 0.5 }}>
              <p>{copyText}</p>
            </div>
          </div>

            <div ref="next" style={{ flex: "100%", color: colors.asphalt }}>
              {next &&
                <span onClick={() => {this.navigate(next.name)}}>↓ {next.name}</span>
              }

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
