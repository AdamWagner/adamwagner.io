import React from "react";
import Link from "gatsby-link";
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
        {name: 'about', active: true},
        {name: 'work', active: false},
        {name: "let's get in touch", active: false},
        {name: 'experiments', active: false},
      ],
      lastClickedProject: null
    };
  }

  componentDidMount() {
    let els = [this.refs.nav, this.refs.about_text]
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

        {/* <Nav>
          {this.state.nav.map((el, idx) => (
            <Link className={(el.active && 'nav-active').toString()} to={`#${el.name}`} key={idx}>{el.name}</Link>
          ))}
        </Nav>
         */}

          <img className={s.headshot} src="images/headshot-2.jpg" alt="" />
          <Section color="rgba(0,0,0,0)" style={{ paddingTop: "1em" }}>
            {/* <Waypoint bottomOffset="50%" onEnter={() => this.updateNav('about')} /> */}
            <h1 className={s.white}>Hi, I'm Adam</h1>

            <div className={s.softRight} ref="about_text">
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
                laboriosam.<Link to="/badracket/">test preloading</Link>
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

          {/* <Waypoint bottomOffset="50%" onEnter={() => this.updateNav('work')} /> */}


          <Section>
            {data.projects.map((p, idx) => (
                <ProjectImage key={idx} image={p.hero} path={p.path} pageColor={p.bgColor}/>
            ))}
          </Section>



          <Section>
            {/* <Waypoint bottomOffset="50%" onEnter={() => this.updateNav('contact')} /> */}
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




      </div>
    );
  }
}

export default IndexPage;
