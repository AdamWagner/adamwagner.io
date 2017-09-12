import React from "react";
import Link from "gatsby-link";
import Waypoint from "react-waypoint";
import { injectGlobal, styled } from "styled-components";
import _ from 'lodash'

import Nav from "../components/LeftCol";
import RightCol from "../components/RightCol";
import Section from "../components/Section";
import action from '../components/action.js';

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
    font-size: 2.75vw;
    line-height: 1.45;
    opacity: 0.7;
  }

  .soft {
    padding: 1em;
  }

  .soft-right {
    padding-right: 3em;
  }

  .transition-wrapper {
    position: relative;
    z-index: 1;
    .transition-item {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
    }
  }

  .detail-page {
    padding: 10px 10px;
    background-color: red;
    height: 100vh;
    box-sizing: border-box;
    overflow: hidden;

    a {
      color: white;
    }

    &.transition-appear {
      transition: transform 1s cubic-bezier(0.7, 0, 0.25, 1),
        left 1s cubic-bezier(0.7, 0, 0.25, 1),
        right 1s cubic-bezier(0.7, 0, 0.25, 1),
        height 1s cubic-bezier(0.7, 0, 0.25, 1);
    }

    &.transition-appear.transition-appear-active {
    }
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
      ]
    };
  }

  updateNav(activeItem) {
    this.state.nav.forEach((el) => el.active = false)
    let navItem = _.find(this.state.nav, (el) => el.name == activeItem)
    navItem.active = true
    this.forceUpdate()
  }

  render() {
    return (
      <div>
        <Nav>
          {this.state.nav.map((el, idx) => (
            <Link className={el.active && 'nav-active'} to={`#${el.name}`} key={idx}>{el.name}</Link>
          ))}
        </Nav>

        <RightCol>
          <img className="headshot" src="images/headshot-2.png" alt="" />
          <Section color="rgba(0,0,0,0)" style={{ paddingTop: "1em" }}>
            <Waypoint bottomOffset="50%" onEnter={() => this.updateNav('about')} />
            <h1 className="white">Hi, I'm Adam</h1>

            <div className="soft-right">
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

          <Section>
            <Waypoint bottomOffset="50%" onEnter={() => this.updateNav('work')} />

            <Link
              key={"badracket"}
              className="list-item"
              onClick={e => action.onNext({
                name: 'CLICKED_ITEM_DATA',
                data: {
                  position: e.target.getBoundingClientRect(),
                  color: item.color,
                },
              })}
              to="/badracket/"
            >
              <img className="project-image" src="/images/brv5-videos.png" />
            </Link>

          </Section>
          <Section>
            {/* <p>Copilot</p> */}
            <img src="http://via.placeholder.com/900x500" />
          </Section>
          <Section>
            {/* <p>Copilot</p> */}
            <img src="http://via.placeholder.com/900x500" />
          </Section>
          <Section>
            <img src="http://via.placeholder.com/900x500" />
            {/* <p>Copilot</p> */}
          </Section>


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
      </div>
    );
  }
}

export default IndexPage;
