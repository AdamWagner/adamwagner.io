import React from "react";
import NavItem from "../components/NavItem";
import Waypoint from "react-waypoint";
import { injectGlobal, styled } from "styled-components";
import _ from "lodash";
import { TweenMax, Sine } from "gsap";

import Nav from "../components/Nav";
import Section from "../components/Section";
import ProjectImage from "../components/ProjectImage";
import Hr from "../components/Hr";
import Box from "../components/Box";

import data from "../data";
import s from "./index.module.styl";
import {colors} from "../styles/vars.json"

class IndexPage extends React.Component {
  constructor() {
    super();
    this.state = {
      nav: data.nav,
      mobile: false
    };
  }

  updateNav(activeItem) {
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
    let els = [this.refs.about_text, this.refs.title];

    // reduces flicker when scrolling quickly
    TweenMax.killTweensOf(els)

    TweenMax.fromTo(
      els,
      0.3,
      { opacity: 1, y: 0 },
      { opacity: 0, y: -10 },
      Sine.easeIn
    );
  };

  render() {
    let titleText = _.find(this.state.nav, i => i.active).titleText;
    let copyText = _.find(this.state.nav, i => i.active).copyText;

    let title = [this.refs.title];
    let about = [this.refs.about_text];

    // reduces flicker when scrolling quickly
    TweenMax.killTweensOf([title,about])

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

    let debounced_updateNav = _.bind(
      _.debounce(this.updateNav, 500, { trailing: true }),
      this
    );

    return (
      <div>
        <Section chapter style={{ paddingTop: "1em", backgroundColor: colors.red }}>
        {/* <Section chapter style={{ paddingTop: "1em"}}> */}

          <div>
            <h1 ref="title" className={s.title}>
              {titleText.split('\n').map((item, key) => {
                return <span key={key}>{item}<br/></span>
              })}
            </h1>

            <div ref="about_text" className={s.about} style={{ opacity: 0.5 }}>
              <p>{copyText}</p>
            </div>
          </div>

        </Section>

          <Waypoint
            topOffset="-50%"
            onEnter={() => debounced_updateNav("about")}
          />

        <Section chapterContent>
          <div className={s.headshotWrapper}>
            <div className={s.headshot} />
          </div>
        </Section>

        <Waypoint
          bottomOffset="50%"
          onEnter={() => {
            debounced_updateNav("work");
          }}
        >
        <Section chapterContent>
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
            onEnter={() => debounced_updateNav("contact")}
            onLeave={() => debounced_updateNav("work")}
          >

        <Section chapterContent style={{height:'100vh'}}>
          <div style={{padding:'2em 4vw'}}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
            dolores corrupti sint ab maiores, ipsam optio ipsum magnam eius
            assumenda perferendis, facere sed corporis, dignissimos doloribus
            officiis. Doloremque, impedit ratione.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
            dolores corrupti sint ab maiores, ipsam optio ipsum magnam eius
            assumenda perferendis, facere sed corporis, dignissimos doloribus
            officiis. Doloremque, impedit ratione.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
            dolores corrupti sint ab maiores, ipsam optio ipsum magnam eius
            assumenda perferendis, facere sed corporis, dignissimos doloribus
            officiis. Doloremque, impedit ratione.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
            dolores corrupti sint ab maiores, ipsam optio ipsum magnam eius
            assumenda perferendis, facere sed corporis, dignissimos doloribus
            officiis. Doloremque, impedit ratione.
          </p>
        </div>
        </Section>
      </Waypoint>
      </div>
    );
  }
}

export default IndexPage;
