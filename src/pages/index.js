import React from "react";
import Link from "gatsby-link";
import Waypoint from "react-waypoint";
import { injectGlobal, styled } from "styled-components";
import _ from 'lodash'
import {TweenMax, Sine} from "gsap";

import Nav from "../components/LeftCol";
import RightCol from "../components/RightCol";
import Section from "../components/Section";
import ProjectImage from "../components/ProjectImage";

import data from '../data'

console.log(data);

injectGlobal`

  body {
    background-color: #96D2E0;
    padding: 0;
    margin: 0;
    font-family: lato, sans-serif;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  .flex {
    display: flex;
  }

  img {
    width: 100%;
    display: block;
  }

  .headshot {
    position: absolute;
    top: 0;
    right: 0;
    z-index:0;
    width:90%;
    opacity:0.9;
  }

  .white {
    color:white;
  }

  p {
    font-size: 2vw;
    line-height: 1.45;
    opacity: 0.7;
  }

  .soft {
    padding: 1em;
  }

  .soft-right {
    padding-right: 3em;
  }

  canvas {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 200;
    pointer-events: none;
  }

`;

class IndexPage extends React.Component {
  constructor() {
    super();
    this.state = {
      nav : [
        {name: 'about', active: true},
        {name: 'work', active: false},
        {name: "let's get in touch", active: false},
        {name: 'experiments', active: false},
      ],
      lastClickedProject: null
    };
  }

  componentDidMount() {
    let els = [this.refs.nav, this.refs.about_text, this.refs.content]
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
        <div ref="nav">
          <Nav>
            {this.state.nav.map((el, idx) => (
              <Link className={el.active && 'nav-active'} to={`#${el.name}`} key={idx}>{el.name}</Link>
            ))}
          </Nav>
        </div>
        <RightCol>
          <img className="headshot" src="images/headshot-2.png" alt="" />
          <Section color="rgba(0,0,0,0)" style={{ paddingTop: "1em" }}>
            <Waypoint bottomOffset="50%" onEnter={() => this.updateNav('about')} />
            <h1 className="white">Hi, I'm Adam</h1>

            <div className="soft-right" ref="about_text">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit. Neque porro quisquam est, qui
                dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                sed quia non numquam eius modi tempora incidunt ut labore et
                dolore magnam <Link to="/page-2/">goto page 2</Link> aliquam quaerat voluptatem. Ut enim ad minima
                veniam, quis nostrum exercitationem ullam corporis suscipit
                laboriosam.
              </p>
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

          <Waypoint bottomOffset="50%" onEnter={() => this.updateNav('work')} />


          {data.projects.map((p, idx) => (
            <Section key={idx}>
              <ProjectImage image={p.hero} path={p.path} pageColor={p.bgColor}/>
            </Section>
          ))}



          <Section>
            <Waypoint bottomOffset="50%" onEnter={() => this.updateNav('contact')} />
            <p>Contact</p>
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
          </Section>




        </RightCol>
        <canvas id="canvas"></canvas>
      </div>
    );
  }
}

export default IndexPage;
