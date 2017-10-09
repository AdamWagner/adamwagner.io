import React from "react";
import store from "store";
import getDuration from "../utils/getDuration";
import { transition } from "../utils/transitionAnimation";
import s from "./projectImage.module.styl";
import { getProject } from "../utils/dataUtils";

export default class ProjectImage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    let { path, pageColor, image } = this.props;
    // let image = this.refs.project_image
    let imageContainer = this.refs.image_container;

    this.setState({
      transition: new transition(path, pageColor, image, imageContainer),
      project: getProject(path)
    });
  }

  componentWillUnmount() {
    this.state.transition.clean();
  }

  onImageClick = e => {
    let {
      top,
      left,
      width,
      height
    } = this.refs.image_container.getBoundingClientRect();


    // save original image coords for "going back" transition
    let prevHeroLocation = store.get("prevHeroLocation") || [];
    prevHeroLocation.push({top, left, width, height})
    store.set("prevHeroLocation", prevHeroLocation);

    console.log('prev location in project image',store.get('prevHeroLocation'));

    // start the transition animation
    this.state.transition.toggleAnimation();
  };

  render() {
    let title = this.state.project && this.state.project.title;
    let description = this.state.project && this.state.project.description;
    let endNote = this.props.endNote ? s.endNote : "";

    return (
      <div className={[s.imageWrapper, endNote].join(' ')} ref="image_container">
        <div className={s.metaWrapper}>
          <span className={s.title}>{title}</span>
          <span className={s.description}>{description}</span>
        </div>

        <div
          style={{ backgroundImage: `url(${this.props.image})` }}
          className={s.projectImage}
          onClick={this.onImageClick}
        />
      </div>
    );
  }
}
