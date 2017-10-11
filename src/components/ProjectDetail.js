import React from "react";
import Link from "gatsby-link";
import store from "store";
import smoothScroll from "smoothscroll";
import _ from 'lodash'

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
      backClicked: false,
      inTransition: false,
      transition: null,
      otherProjects: projectsExcept(this.props.projectName),
      project: getProject(this.props.projectName)
    };
  }

  componentDidMount = () => {
    let content = this.refs.content;

    let defaultOrigBoundingBox = {"top":34,"left":670,"width":670,"height":756}
    let prevHeroLocation = store.get("prevHeroLocation") || [];
    let origBoundingBox = _.takeRight(prevHeroLocation)[0] || defaultOrigBoundingBox

    // fade in content
    // TweenMax.fromTo(
    //   content,
    //   0.4,
    //   { opacity: 0 },
    //   { opacity: 1, delay: 0.1 },
    //   Sine.easeIn
    // );

    // create transition instance
    this.setState({
      transition: new transition(
        undefined,                // path
        undefined,                // pageColor
        this.state.project.hero,  // imgURL
        undefined,                // imageContainer
        origBoundingBox,          // boundingBox
        true                      // reversed?
      )
    });
  };

  componentWillUnmount = () => {
    this.state.transition.clean();
  };

  animateBack = () => {
    // pop this location off stack
    let prevHeroLocation = store.get("prevHeroLocation") || []
    prevHeroLocation.pop()
    store.set("prevHeroLocation", prevHeroLocation);

    this.setState({ inTransition: true });
    this.state.transition.toggleAnimation();
  };

  back = () => {
    this.setState({backClicked: true})
    let s = window.scrollY;
    let globalScrollSpeed = 0.25
    if (s > 0) {
      let scrollDuration = getDuration(0, s, false) * (1000 * globalScrollSpeed);
      smoothScroll(0, scrollDuration, () => {
        setTimeout( () => {
          this.animateBack();           
        }, 100);
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
          <Back onClick={this.back} backClicked={this.state.backClicked}/>
          <div ref="content" className="project">
            {this.props.children}
            <MoreProjects projects={this.state.otherProjects.slice(0,2)}/>
          </div>
          <Footer/>
        </div>
    );
  }
}

export default ProjectDetail;
