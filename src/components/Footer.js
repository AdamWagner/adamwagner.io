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
              <p style={{marginBottom:0}}>awagnerjcu08@gmail.com</p>
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
                <li>LinkedIn</li>
                <li>Github</li>
                <li>Dribbble</li>
              </ul>


            </Box>
      </Section>
    );
  }
}
