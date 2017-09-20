import React from "react";
import store from "store";
import getDuration from '../utils/getDuration'
import {transition} from '../utils/transitionAnimation'
import s from './projectImage.module.styl'

export default class ProjectImage extends React.Component {

  componentDidMount() {
    let {path,pageColor} = this.props
    let image = this.refs.project_image
    let imageContainer = this.refs.image_container

    this.setState(
      {transition: new transition(path, pageColor, image, imageContainer)},
      () => {
        this.state.transition.init()
      }
    )
  }

  componentWillUnmount() {
    this.state.transition.clean()
  }

  onImageClick = e => {
    let { top, left, width, height } = this.refs.image_container.getBoundingClientRect();
    // save original image coords for "going back" transition
    store.set("lastClickedProject", { top, left, width, height });

    // start the transition animation
    this.state.transition.toggleAnimation();

  };

  render() {
    return (
      <div ref="image_container" className={s.projectImage}>
        <img src={this.props.image} alt="" onClick={this.onImageClick} ref="project_image"/>
      </div>
    );
  }
}
