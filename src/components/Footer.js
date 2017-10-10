import React from "react";
import Link from "gatsby-link";

import Section from "../components/Section";
import Box from "../components/Box";
import ProjectImage from "../components/ProjectImage";

import s from "./Footer.module.styl";
import { colors } from "../styles/vars.json";

export default class Footer extends React.Component {
  render() {
    return (
      <Section flex wrap color={colors.white} textColor={colors.asphalt} softTop={'5em'} softBottom={'3em'} style={{alignItems:'flex-end'}}>
            <Box half style={{paddingLeft:'2em'}}>
              <p>Let's chat.</p>
              <p style={{marginBottom:0}}><a href="mailto:hello@adamwagner.io" target="_blank"></a>hello@adamwagner.io</p>
            </Box>
            <Box half textRight>
              <ul className={s.listHorizontal} style={{visibility:'hidden'}}>
                <li>
                  <Link to="/opentable/">OpenTable</Link>
                </li>
                <li>
                  <Link to="/copilot/">Copilot</Link>
                </li>
                <li>
                  <Link to="sounds-just-like/">Sounds Just Like</Link>
                </li>
                <li>
                  <Link to="/badracket/">Bad Racket</Link>
                </li>
              </ul>
              <ul className={s.listHorizontal}>
                <li><a href="https://www.linkedin.com/in/adam-wagner-9093925/" target="_blank">LinkedIn</a></li>
                <li><a href="https://github.com/AdamWagner" target="_blank">Github</a></li>
                <li><a href="https://dribbble.com/AdamWagner" target="_blank">Dribbble</a></li>
              </ul>


            </Box>
      </Section>
    );
  }
}
