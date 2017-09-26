import React from "react";
import Section from "../components/Section";
import Box from "../components/Box";
import ProjectImage from "../components/ProjectImage";

import s from "./MoreProjects.module.styl";
import { colors } from "../styles/vars.json";

export default class MoreProjects extends React.Component {
  render() {
    return (
      <Section flex wrap color={colors.asphalt} softTop={'4em'}>
          <Box full textCenter softBottom={'1em'}>
            <p>More Projects</p>
          </Box>

          {this.props.projects.map((p, idx) => (
            <Box half key={idx}>
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
