import React from "react";
import { TweenMax, Sine } from "gsap";
import s from "./NavHelper.module.styl";

export default class NavHelper extends React.Component {

  render() {
    let { target, direction } = this.props;
    let arrow = direction == "prev" ? "↑" : "↓";
    let vMove = this.props.direction == "prev" ? -20 : 20;

    TweenMax.fromTo(
      [this.refs.navHelper],
      1,
      { opacity: 0, y: vMove },
      { opacity: 1, y: 0, delay: 1 },
      Sine.easeIn
    );

    return (
      <div ref="navHelper" className={s.navHelper}>
        {target && (
          <span
            onClick={() => {
              this.props.handler(target.name);
            }}
          >
            <span className={s.arrowKey}>{arrow}</span>
            {target.name}
          </span>
        )}
      </div>
    );
  }
}
