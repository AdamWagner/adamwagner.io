import React from "react";
import NavItem from "../components/NavItem";
import Waypoint from "react-waypoint";
import { injectGlobal, styled } from "styled-components";
import _ from 'lodash'
import {TweenMax, Sine} from "gsap";

import Nav from "../components/Nav";
import Section from "../components/Section";
import ProjectImage from "../components/ProjectImage";

import data from '../data'
import s from "./index.module.styl"


class IndexPage extends React.Component {
  constructor() {
    super();
    this.state = {
      nav : [
        {name: 'work', active: true},
        {name: 'experience', active: false},
        {name: "contact", active: false},
        {name: 'experiments', active: false},
      ],
      lastClickedProject: null
    };
  }

  componentDidMount() {
    let els = [this.refs.nav]
    TweenMax.fromTo(els, .4, {opacity:0}, {opacity: 1, delay:0.1}, Sine.easeIn, );
  }

  updateNav(activeItem) {
    this.state.nav.forEach((el) => el.active = false)
    let navItem = _.find(this.state.nav, (el) => el.name == activeItem)
    navItem.active = true
    this.forceUpdate()
  }

  render() {
    return (
      <div ref="content">



        {/* <Section narrow color="#96D2E0" style={{ paddingTop: "1em" }}> */}
        <Section chapter style={{ paddingTop: "1em" }}>
          {/* <video width="100%" height="100%" src="images/dust-2.mp4" autoplay="autoplay" loop="true"></video> */}
          {/* <video className={s.inverted} width="100%" height="100%" src="images/dust-2.mp4" autoplay="autoplay" loop="true"></video> */}
          <h1 className={s.title}>
            Hi, I'm Adam. <br/>
            I design and manage products for companies big and small.
          </h1>
          {/* <img className={s.headshot} src="images/headshot-2.jpg" alt="" /> */}
          {/* <video width="100%" height="100%" src="images/light.mp4" autoplay="autoplay" loop="true"></video> */}

          <div ref="about_text" style={{opacity: 0.5}}>
            <p>For more than ten years, I've been designing, building, and managing products at agencies, startups, and global companies.</p>
            <p>It'd be great to work together to bring your idea to life. Let's chat.</p>
          </div>


          <Nav>
            {this.state.nav.map((el, idx) => (
              <NavItem active={el.active} to={`#${el.name}`} idx={idx} name={el.name} />
            ))}
          </Nav>


        </Section>

        <Waypoint bottomOffset="50%" onEnter={() => this.updateNav('work')} />


        <Section chapterContent>
          {data.projects.map((p, idx) => (
              <ProjectImage key={idx} image={p.hero} path={p.path} pageColor={p.bgColor}/>
          ))}
        </Section>

        <Waypoint bottomOffset="50%" onEnter={() => this.updateNav('contact')} />
        <Section chapterContent>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos dolores corrupti sint ab maiores, ipsam optio ipsum magnam eius assumenda perferendis, facere sed corporis, dignissimos doloribus officiis. Doloremque, impedit ratione.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos dolores corrupti sint ab maiores, ipsam optio ipsum magnam eius assumenda perferendis, facere sed corporis, dignissimos doloribus officiis. Doloremque, impedit ratione.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos dolores corrupti sint ab maiores, ipsam optio ipsum magnam eius assumenda perferendis, facere sed corporis, dignissimos doloribus officiis. Doloremque, impedit ratione.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos dolores corrupti sint ab maiores, ipsam optio ipsum magnam eius assumenda perferendis, facere sed corporis, dignissimos doloribus officiis. Doloremque, impedit ratione.</p>
        </Section>


      </div>
    );
  }
}

export default IndexPage;
