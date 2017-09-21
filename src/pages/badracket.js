import React from "react";
import ReactDOM from "react-dom";
import Link from "gatsby-link";
import styled from "styled-components";
import store from "store";
import smoothScroll from "smoothscroll";

import {transition} from '../utils/transitionAnimation'
import getDuration from '../utils/getDuration';
import {getProject, projectsExcept} from '../utils/dataUtils'
import Section from "../components/Section";
import ProjectImage from "../components/ProjectImage";
import Back from '../components/Back'


const project = getProject('badracket')

const HeroImage = styled.div`
  background-image: url(${project.hero});
  background-size: cover;
  background-position: center;
  height: 68vh;
  position: relative;
  z-index: 200;
  visibility: ${props => (props.inTransition ? "hidden" : "visible")};
`;

const projectName = 'badracket'

class BadRacket extends React.Component {
  constructor() {
    super();
    this.state = {
      inTransition: false,
      transition: null,
      otherProjects:projectsExcept(projectName),
      project:getProject(projectName),
    };
  }

  componentDidMount = () => {
    let content = this.refs.content;
    let origBoundingBox = store.get("lastClickedProject");

    // fade in content
    TweenMax.fromTo(content, 0.4, {opacity:0}, {opacity: 1, delay:0.1}, Sine.easeIn, );

    this.setState(
      { transition: new transition(undefined, undefined, project.hero, undefined, origBoundingBox, true) },
    )
  }

  componentWillUnmount = () => {
    this.state.transition.clean()
  }

  animateBack = () => {
    this.setState({inTransition:true})
    this.state.transition.toggleAnimation()
  }

  back = () => {
    let s = window.scrollY
    if (s > 0) {
      let scrollDuration = getDuration(0, s)
      smoothScroll(0, scrollDuration*1000, ()=>{this.animateBack()})
    } else {
      this.animateBack();
    }
  }

  render() {
    return (
      <div style={{ backgroundColor: project.bgColor }}>
        <HeroImage inTransition={this.state.inTransition} />

        <Back onClick={this.back} />

        <div ref="content">
          <Section narrow>
            <div className="soft-right">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit. Neque porro quisquam est, qui
                dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                sed quia non numquam eius modi tempora incidunt ut labore et
                dolore magnam <Link to="/page-2/">goto page 2</Link> aliquam
                quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam.
              </p>
            </div>
          </Section>
          <Section narrow color="darkgray">
            <div className="soft-right">
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
          <Section narrow color="gray">
            <div className="soft-right">
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
          <Section narrow color="darkgray">
            <div className="soft-right">
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
            {this.state.otherProjects.map((p, idx) => (
                <ProjectImage key={idx} className="endNote" image={p.hero} path={p.path} pageColor={p.bgColor}/>
              )
            )}
          </Section>

        </div>
      </div>
    );
  }
}

export default BadRacket;
