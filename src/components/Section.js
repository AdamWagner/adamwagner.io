import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import s from "./Section.module.styl";

class Section extends React.Component {
  render() {
    let p = this.props;

    let narrow = p.narrow ? s.narrow : "";
    let flex = p.flex ? s.flex : "";
    let chapter = p.chapter ? s.chapter : "";
    let chapterContent = p.chapterContent ? s.chapterContent : "";

    let gradient =
      p.top && p.bottom
        ? {
            background: `linear-gradient(
          ${p.top} 0%,
          ${p.top} 50%,
          ${p.bottom} 50%,
          ${p.bottom} 100%)`
          }
        : "";

    return (
      <div
        className={[s.section, narrow, flex, chapter, chapterContent].join(" ")}
        style={Object.assign({ backgroundColor: p.color }, p.style, gradient)}
        ref={p.innerRef}
      >
        {p.children}
      </div>
    );
  }
}

export default Section;
