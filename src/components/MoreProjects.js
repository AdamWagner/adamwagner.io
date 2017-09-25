import React from "react";
import Section from "../components/Section";
import ProjectImage from "../components/ProjectImage";
import s from "./MoreProjects.module.styl";

export default class MoreProjects extends React.Component {
  render() {
    return (
      <Section>
        <p className={s.flexFull}>More Projects</p>
        <div className={s.flexContainer}>
          {this.props.projects.map((p, idx) => (
            <div className={s.flexHalf}>
              <ProjectImage
                key={idx}
                endNote
                image={p.hero}
                path={p.path}
                pageColor={p.bgColor}
              />
            </div>
          ))}
        </div>
      </Section>
    );
  }
}
