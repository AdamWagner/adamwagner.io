import React from 'react'
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'
import styled from "styled-components"
import {TweenMax, Bezier, TweenLite, Power3, Sine, ScrollToPlugin} from "gsap"
import store from 'store'
import smoothScroll from 'smoothscroll'

import Section from "../components/Section"
import data from '../data'

let br = data.projects[0];

const HeroImage = styled.div`
  background-image: url(${br.hero});
  background-size:cover;
  background-position: center;
  height: calc(40vw + 100px)
`


class BadRacket extends React.Component {

  componentDidMount() {
    let el = this.refs.content
    TweenMax.fromTo(el, .6, {opacity:0}, {opacity: 1, delay:0.2}, Sine.easeIn, );
  }

  getDuration(start, end) {
    let pixelsPerSecond = 700;
    let duration = Math.abs((end - start) / pixelsPerSecond);
    // set min value of .2
    duration = duration < .25 ? .25 : duration
    // set max value of .5
    duration = duration > .5 ? .5 : duration
    return duration;
  }

  animateBack = () => {
    let body = document.body
    let {top, left, width, height} = store.get('lastClickedProject')
    let hero_original = ReactDOM.findDOMNode(this.refs.hero)
    let {top: t, left: l, width: w, height: h} = hero_original.getBoundingClientRect()
    let el = hero_original.cloneNode()
    el.style.cssText = `z-index:200; position: fixed; top:${t}px; left:${l}px; width:${w}px; height:${h}px;`
    body.append(el)

    // create and append splash circle
    let splash = document.createElement('div')
    splash.style = `
      border-radius:100%;
      width: 50px;
      height: 50px;
      background: #96D2E0;
      position: fixed;
      top:50px;
      left:50%;
      z-index:100;
      opacity: 0.9;
    `
    body.append(splash)

    // animate splash
    TweenMax.to(splash, .6,  {scale:80, opacity:1, transformOrigin: "50% 15%"}, Sine.easeIn)


    TweenMax.to(el, this.getDuration(t, top), {bezier:
      {curviness:0.25, values:[
        {x:l, y:t, width:w, height: h},
        {x:left/1.5, y:top, width: width+100, height: height+50},
        {x:left, y:top, width: width, height: height},
      ]}, ease:Power3.easeOut, autoRound:false})

      // redirect to home page
      setTimeout(() => {
        window.history.back();
        TweenMax.to(splash, 0.2, {opacity: 0, delay: 0.1})
        setTimeout(function () {
          splash.remove()
          el.remove()
        }, 500);
      }, (this.getDuration(t, top)*1000))
  }

  back = () => {
    if (window.scrollY > 0) {
      smoothScroll(0)
      setTimeout(() => {
        this.animateBack()
      }, 500);
    } else {
      this.animateBack()
    }
  }


  render() {
    return (
      <div style={{backgroundColor: br.bgColor }}>
        <HeroImage ref="hero"/>

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
                dolore magnam <Link to="/page-2/">goto page 2</Link> aliquam quaerat voluptatem. Ut enim ad minima
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
    )
  }
}


export default BadRacket
