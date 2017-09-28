import React from "react";
import Link from "gatsby-link";
import store from "store";
import smoothScroll from "smoothscroll";

import { transition } from "../utils/transitionAnimation";
import getDuration from "../utils/getDuration";
import { getProject, projectsExcept } from "../utils/dataUtils";
import Section from "../components/Section";
import ProjectImage from "../components/ProjectImage";
import Back from "../components/Back";
import HeroImage from "../components/HeroImage";
import MoreProjects from "../components/MoreProjects";
import Footer from "../components/Footer";

class ProjectDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inTransition: false,
      transition: null,
      otherProjects: projectsExcept(this.props.projectName),
      project: getProject(this.props.projectName)
    };
  }

  componentDidMount = () => {
    let content = this.refs.content;
    let origBoundingBox = store.get("lastClickedProject");

    // fade in content
    TweenMax.fromTo(
      content,
      0.4,
      { opacity: 0 },
      { opacity: 1, delay: 0.1 },
      Sine.easeIn
    );

    // create transition instance
    this.setState({
      transition: new transition(
        undefined,
        undefined,
        this.state.project.hero,
        undefined,
        origBoundingBox,
        true
      )
    });
  };

  componentWillUnmount = () => {
    this.state.transition.clean();
  };

  animateBack = () => {
    this.setState({ inTransition: true });
    this.state.transition.toggleAnimation();
  };

  back = () => {
    let s = window.scrollY;
    if (s > 0) {
      let scrollDuration = getDuration(0, s);
      smoothScroll(0, scrollDuration * 1000, () => {
        this.animateBack();
      });
    } else {
      this.animateBack();
    }
  };

  render() {
    return (
      this.state.project &&
        <div style={{ backgroundColor: this.state.project.bgColor }}>
          <HeroImage
            src={this.state.project.hero}
            inTransition={this.state.inTransition}
          />
          <Back onClick={this.back} />
          <div ref="content">
            {this.props.children}
            <MoreProjects projects={this.state.otherProjects.slice(0,2)}/>
          </div>
          <Footer/>
        </div>
    );
  }
}

export default ProjectDetail;
