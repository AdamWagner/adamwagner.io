import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import s from "./Section.module.styl";

class Section extends React.Component {
  
  render() {
    let p = this.props;

    let narrow = p.narrow ? s.narrow : "";
    let wrap = p.wrap ? s.wrap : "";
    let flex = p.flex ? s.flex : "";
    let chapter = p.chapter ? s.chapter : "";
    let chapterContent = p.chapterContent ? s.chapterContent : "";

    let softClasses = []
    Object.entries(p).map((kv) => {
      let key = kv[0]
      let val = kv[1]
      if (key.includes('soft')) {
        softClasses.push(s[key+val])
      }
    })

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
        className={[
          s.section,
          narrow,
          wrap,
          flex,
          chapter,
          chapterContent,
          this.props.className,
          ...softClasses
        ].join(" ")}
        id={this.props.id}
        style={Object.assign(
          {
            backgroundColor: p.color,
            color: p.textColor,
          },
          p.style,
          gradient
        )}
        ref={p.innerRef}
      >
        {p.children}
      </div>
    );
  }
}

export default Section;
