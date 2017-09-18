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
      inTransition: false
    };
  }

  componentDidMount() {
    transition();
  }


  onImageClick = e => {

    // toggleAnimation();



    // redirect to detail page
    // setTimeout(() => {
      // window.___navigateTo(this.props.path);
      // setTimeout(function () {
        // el.remove()
        // console.log('el removed now, mothafucka!');
      // }, 250);
    // }, duration * 1000);
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
      // <div className='project-image' onClick={this.onImageClick} style={style} ref="project_image" />

      <div className="image-container">
        <img className="image" src={this.props.image} alt=""/>
      </div>
    );
  }
}
