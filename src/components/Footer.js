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
      <Section flex wrap color={colors.white} textColor={colors.asphalt} softTop={'5em'} softBottom={'2em'}>
          <Box container wrap full alignBaseline>
          <Box full>
            <p>Let's chat.</p>
          </Box>
          <Box third>
            <p>awagnerjcu08@gmail.com</p>
          </Box>
          <Box twoThird textRight>
            <ul className={s.listHorizontal}>
              <li>LinkedIn</li>
              <li>Github</li>
              <li>Dribbble</li>
            </ul>

            <ul className={s.listHorizontal}>
              <li>
                <Link to="/opentable">OpenTable</Link>
              </li>
              <li>
                <Link to="/copilot">Copilot</Link>
              </li>
              <li>
                <Link to="sounds-just-like">Sounds Just Like</Link>
              </li>
              <li>
                <Link to="/badracket">Bad Racket</Link>
              </li>
            </ul>

          </Box>
        </Box>
      </Section>
    );
  }
}
