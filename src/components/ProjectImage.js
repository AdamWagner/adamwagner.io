import React from 'react'
import Link from 'gatsby-link'
import { injectGlobal, styled } from "styled-components";
import { browserHistory } from 'react-router'
import {TweenMax, TweenLite, Bezier, TimelineMax, Power1, Power3, Sine, Back, Elastic} from "gsap";

export default class ProjectImage extends React.Component {

  constructor() {
    super();
    this.state = {
      active: false,
      top: 0,
      left: 0,
    }
  }

  getDuration(start, end) {
    let pixelsPerSecond = 700;
    let duration = Math.abs((end - start) / pixelsPerSecond);
    // set min value of .2
    duration = duration < .25 ? .25 : duration
    // set max value of .5
    duration = duration > .5 ? .5 : duration
    console.log('duration', duration);
    return duration;
  }

  onImageClick = (e) => {
    // get the first element - the <body>
    let body = document.body
    // get window width minus scrollbar
    let w = body.clientWidth
    let h = body.clientHeight
    // get clicked project element and position data
    let el_original = this.refs.project_image
    let {top, left, width, height} = el_original.getBoundingClientRect();
    // clone it
    let el = el_original.cloneNode()
    let elStyle = window.getComputedStyle(el_original, null).cssText;
    // place element on top of original
    el.style.cssText = elStyle + `z-index:200; position: fixed; top:${top}px; left:${left}px; width:${width}px; height:${height}px;`
    body.append(el)

    // get mouse click coordinates
    let {clientY, clientX} = e;

    // create and append splash circle
    let splash = document.createElement('div')
    splash.style = `
      border-radius:100%;
      width: 50px;
      height: 50px;
      background: ${this.props.pageColor};
      position: fixed;
      top:${clientY}px;
      left:${clientX}px;
      z-index:100;
      opacity: 0.75;
    `
    body.append(splash)

    // animate splash
    TweenMax.to(splash, .6,  {scale:80, opacity:1, transformOrigin: "50% 15%"}, Sine.easeIn);

    let curve = 200

    // animate image to the hero position
    TweenMax.to(el, this.getDuration(0, top), {bezier:
      {curviness:0.25, values:[
        {x:0, y:0, width:width, height: height},
        {x:-left, y:-(top/2.5), width: w, height: height+25},
        {x:-left, y:-top, width: w, height: height+100},
    ]}, ease:Power3.easeOut});

    // animate image to the hero position without Bezier
    // TweenMax.to(el, 0.2, {width: w, x:-left}, Elastic.easeInOut );
    // TweenMax.to(el, 0.6,  {y:-top, delay: 0.1}, Sine.easeInOut);
    // TweenMax.to(el, 0.7,  {height: height+100, delay: 0.1}, Sine.easeIn);

    // redirect to detail page
    setTimeout(() => {
      el.remove()
      splash.remove()
      window.___navigateTo(this.props.path)
    }, (this.getDuration(0,top)*1000))
  }


  render() {

    let style = {
      cursor:'pointer',
      width:'100%',
      height:'40vw',
      willChange:'width, transform',
      backgroundImage:`url(/images/${this.props.image})`,
      backgroundPosition:'center',
      backgroundSize:'cover',
    }


    return (
      <div onClick={this.onImageClick} style={style} ref="project_image">
      </div>
    )
  }
}
