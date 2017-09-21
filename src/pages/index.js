import React from "react";
import NavItem from "../components/NavItem";
import Waypoint from "react-waypoint";
import { injectGlobal, styled } from "styled-components";
import _ from "lodash";
import { TimelineMax, TweenMax, Sine } from "gsap";

import Nav from "../components/Nav";
import Section from "../components/Section";
import ProjectImage from "../components/ProjectImage";
import Hr from "../components/Hr";

import data from "../data";
import s from "./index.module.styl";

class IndexPage extends React.Component {
  constructor() {
    super();
    this.state = {
      nav: [
        {
          name: "about",
          active: true,
          titleText: `Hi, I'm Adam. \n I design and manage products.`,
          copyText: `Over the last ten years, I've had the pleasure of building effective product experiences at an agency, a startup, a large organization, and my own side projects.`
        },
        {
          name: "work",
          active: false,
          titleText: `Why don't you check out some of my work? \n ↳`,
          copyText: `Although I've built some consumer-focsed side projects, I'm most passionate about improving the nature of work. You'll find a healthy selection of products aimed at small business owners, designers, and musicians.`
        },
        {
          name: "experience",
          active: false,
          titleText: `Let's work together.`
        },
        {
          name: "contact",
          active: false,
          titleText: `Let's work together.`,
          copyText: `Let's make your idea a reality. Let's see it move. See it function. It'll be beautiful.`
        },
        {
          name: "experiments",
          active: false
        }
      ],
      lastClickedProject: null
    };
  }

  updateNav(activeItem) {
    let currActive = _.find(this.state.nav, i => i.active);
    let navItem = _.find(this.state.nav, el => el.name == activeItem);

    if (currActive.name != navItem.name) {
      // console.log(currActive.name, navItem.name);
      this.state.nav.forEach(el => (el.active = false));
      navItem.active = true;
      this.animateOut();
      setTimeout(() => {
        this.forceUpdate();
      }, 400);
    }
  }

  animateOut = () => {
    let els = [this.refs.about_text, this.refs.title];
    TweenMax.fromTo(
      els,
      0.4,
      { opacity: 1, y: 0 },
      { opacity: 0, y: -20 },
      Sine.easeIn
    );
  };

  render() {
    let titleText = _.find(this.state.nav, i => i.active).titleText;
    let copyText = _.find(this.state.nav, i => i.active).copyText;

    let title = [this.refs.title];
    let about = [this.refs.about_text];

    TweenMax.fromTo(
      title,
      0.4,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, delay: 0.1 },
      Sine.easeIn
    );
    TweenMax.fromTo(
      about,
      0.8,
      { opacity: 0, y: -20 },
      { opacity: 0.7, y: 0, delay: 0.5 },
      Sine.easeIn
    );

    let debounced_updateNav = _.bind(
      _.debounce(this.updateNav, 500, { trailing: true }),
      this
    );
    // let debounced_updateNav = _.bind(this.updateNav, this)

    return (
      <div>
        <Section chapter style={{ paddingTop: "1em" }}>
          {/* <video width="100%" height="100%" src="images/dust-2.mp4" autoplay="autoplay" loop="true"></video> */}
          {/* <video className={s.inverted} width="100%" height="100%" src="images/dust-2.mp4" autoplay="autoplay" loop="true"></video> */}
          <h1 ref="title" className={s.title}>
            {titleText}
          </h1>
          {/* <video width="100%" height="100%" src="images/light.mp4" autoplay="autoplay" loop="true"></video> */}

          <div ref="about_text" style={{ opacity: 0.5 }}>
            <p>{copyText}</p>{" "}
          </div>
        </Section>

        <Waypoint
          bottomOffset="50%"
          onEnter={() => debounced_updateNav("about")}
        >
          <Section chapterContent>
            <div className={s.headshot} />
          </Section>
        </Waypoint>

        <Waypoint
          bottomOffset="50%"
          onEnter={() => {debounced_updateNav("work")}}
          onLeave={() => {debounced_updateNav('about')}}
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

        {/* // <div style={{ height: "200px" }} /> */}

        <Waypoint
          bottomOffset="50%"
          onEnter={() => debounced_updateNav("contact")}
          onLeave={() => debounced_updateNav("work")}
        />

        <Section chapterContent>
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
        </Section>
      </div>
    );
  }
}

export default IndexPage;
