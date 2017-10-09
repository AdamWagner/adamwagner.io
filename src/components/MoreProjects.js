import React from "react";
import Section from "../components/Section";
import Box from "../components/Box";
import ProjectImage from "../components/ProjectImage";

import s from "./MoreProjects.module.styl";
import { colors } from "../styles/vars.json";

export default class MoreProjects extends React.Component {
  render() {
    return (
      <Section flex wrap className={s.moreProjects} color={colors.white} textColor={colors.asphalt} softTop='6em'>
          <Box full textCenter softBottom={'3em'}>
            <p>More Case Studies</p>
          </Box>

          {this.props.projects.map((p, idx) => (
            <Box half hard key={idx}>
              <ProjectImage
                endNote
                image={p.hero}
                path={p.path}
                pageColor={p.bgColor}
              />
            </Box>
          ))}
      </Section>
    );
  }
}
