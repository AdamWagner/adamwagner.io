import React from "react";
import { injectGlobal, styled } from "styled-components";
import { TweenMax, Bezier, Power3, Sine, Stepped} from "gsap";
import store from "store";
import ripple from "../utils/splash";
import getDuration from '../utils/getDuration'


export default class ProjectImage extends React.Component {
  constructor() {
    super();
    this.state = {
      inTransition: false
    };
  }


  onImageClick = e => {
    this.setState({ inTransition: true });
    let body = document.body;

    // get window width minus scrollbar
    let w = body.clientWidth;
    let h = body.clientHeight;

    // get clicked project element and position data
    let el_original = this.refs.project_image;
    let { top, left, width, height } = el_original.getBoundingClientRect();

    // clone it. Note this doesn't clone styles.
    let el = el_original.cloneNode();

    // place element on top of original
    // TODO: find a cleaner way to copy these over
    let elStyles = `
      cursor: pointer;
      width: 100%;
      height: 40vw;
      will-change: width, transform;
      background-image: url(${this.props.image});
      background-position: center center;
      background-size: cover;
      pointer-events: none;
    `;
    el.style.cssText =
      elStyles +
      `z-index:200; position: fixed; top:${top}px; left:${left}px; width:${width}px; height:${height}px;`;
    body.append(el);

    // get mouse click coordinates
    let { clientY, clientX } = e;

    // save original image coords for "going back" transition
    store.set("lastClickedProject", { top, left, width, height });

    let duration = getDuration(0, top);

    // make ripple
    ripple(e, duration, this.props.pageColor);

    // animate image to the hero position
    TweenMax.to(el, duration, {
      bezier: {
        curviness: 0.25,
        values: [
          { x: 0, y: 0, width: width, height: height },
          { x: -left, y: -(top / 2.5), width: w, height: height + 25 },
          { x: -left, y: -top, width: w, height: height + 100 }
        ],
      },
      roundProps:"x,y",
      autoRound: false,
      ease: Sine.easeInOut
    });

    // redirect to detail page
    setTimeout(() => {
      window.___navigateTo(this.props.path);
      setTimeout(function () {
        el.remove()
        console.log('el removed now, mothafucka!');
      }, 250);
    }, duration * 1000);
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
      <div onClick={this.onImageClick} style={style} ref="project_image" />
    );
  }
}
