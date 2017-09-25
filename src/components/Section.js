import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import s from "./Section.module.styl";

class Section extends React.Component {
  render() {
    let narrow = this.props.narrow ? s.narrow : "";
    let flex = this.props.flex ? s.flex : "";
    let chapter = this.props.chapter ? s.chapter : "";
    let chapterContent = this.props.chapterContent ? s.chapterContent : "";
    return (
      <div
        className={[s.section, narrow, flex, chapter, chapterContent].join(" ")}
        style={Object.assign({ backgroundColor: this.props.color }, this.props.style)}
        ref={this.props.innerRef}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Section;
