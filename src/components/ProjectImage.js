import React from "react";
import { injectGlobal, styled } from "styled-components";
import { TweenMax, Bezier, Power3, Sine, Stepped} from "gsap";
import store from "store";
import ripple from "../utils/splash";
import getDuration from '../utils/getDuration'

import {transition} from '../utils/transitionAnimation'

export default class ProjectImage extends React.Component {
  constructor() {
    super();
    this.state = {
      transition: null
    };
  }

  componentDidMount() {
    let {path,pageColor} = this.props
    let image = this.refs.project_image
    let imageContainer = this.refs.image_container

    this.setState(
      {transition: new transition(path, pageColor, image, imageContainer)},
      () => {
        this.state.transition.init()
      }
    )
  }

  onImageClick = e => {
    this.state.transition.toggleAnimation();
  };

  render() {
    let style = {
      cursor: "pointer",
      width: "100%",
      height: "40vw",
      willChange: "width, transform",
      backgroundImage: `url(${this.props.image})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      visibility: this.state.inTransition ? "hidden" : "visible"
    };

    return (
      <div className="image-container" ref="image_container">
        <img className="image" src={this.props.image} alt="" onClick={this.onImageClick} ref="project_image"/>
      </div>
    );
  }
}
