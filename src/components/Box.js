import React from "react";
import s from "./Box.module.styl";

class Wrapper extends React.Component {
  render() {
    let narrow = this.props.narrow ? s.narrow : "";
    return (
      <div className={[s.wrapper, narrow].join(" ")}>{this.props.children}</div>
    );
  }
}

export default class Box extends React.Component {
  render() {
    let p = this.props
    let container = p.container ? s.container : "";
    let wrap = p.wrap ? s.wrap : "";

    let full = p.full ? s.full : "";
    let half = p.half ? s.half : "";
    let third = p.third ? s.third : "";
    let twoThird = p.twoThird ? s.twoThird : "";

    let hard = p.hard ? s.hard : "";

    let center = p.center ? s.center : ""
    let textCenter = p.textCenter ? s.textCenter : "";
    let textRight = p.textRight ? s.textRight : "";

    let alignBaseline = p.alignBaseline ? s.alignBaseline : "";

    return (
      <div
        className={[
          s.box,
          container,
          wrap,
          alignBaseline,
          full,
          half,
          third,
          twoThird,
          hard,
          center,
          textCenter,
          textRight,
        ].join(" ")}
        style={{paddingTop: p.softTop, paddingBottom:p.softBottom, paddingRight: p.softRight}}
      >
        {p.container ? (
          <Wrapper>{p.children}</Wrapper>
        ) : (
          p.children
        )}
      </div>
    );
  }
}
