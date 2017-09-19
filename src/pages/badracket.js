import React from "react";
import ReactDOM from "react-dom";
import Link from "gatsby-link";
import styled from "styled-components";
import store from "store";
import smoothScroll from "smoothscroll";

import {transition} from '../utils/transitionAnimation'
// import ripple from "../utils/splash";
import getDuration from "../utils/getDuration";
import Section from "../components/Section";
import data from "../data";

// TODO: get this programatically
let br = data.projects[0];


const HeroImage = styled.div`
  background-image: url(${br.hero});
  background-size: cover;
  background-position: center;
  height: 68vh;
  position: relative;
  z-index: 200;
  visibility: ${props => (props.inTransition ? "hidden" : "visible")};
`;


class BadRacket extends React.Component {
  constructor() {
    super();
    this.state = {
      inTransition: false,
      transition: null
    };
  }

  componentDidMount = () => {
    let content = this.refs.content;
    TweenMax.fromTo(content, .4, {opacity:0}, {opacity: 1, delay:0.1}, Sine.easeIn, );

    let {path, pageColor} = this.props
    let origBoundingBox = store.get("lastClickedProject");

    // create image element for canvas texture in transition
    let oImg = document.createElement('img')
    oImg.setAttribute('src', br.hero)

    this.setState(
      {transition: new transition(path, pageColor, oImg, null, origBoundingBox, true)},
      () => {
        this.state.transition.init()
      }
    )
  }

  componentWillUnmount = () => {
    this.state.transition.clean()
  }

  animateBack = e => {
    this.state.transition.toggleAnimation()
  }

  back = e => {
    // TODO : add scroll up if needed
    this.setState({inTransition:true})
    this.animateBack()
  }


  render() {
    return (
      <div style={{ backgroundColor: br.bgColor }}>
        <HeroImage inTransition={this.state.inTransition} />

        <div onClick={this.back}>Back</div>

        <div ref="content">
          <Section>
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
          <Section color="darkgray">
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
          <Section color="gray">
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
          <Section color="darkgray">
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
        </div>
      </div>
    );
  }
}

export default BadRacket;
