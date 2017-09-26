import React from "react";
import { colors } from "../styles/vars.json";

export default class HandSvg extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount = () => {
    let hand = this.refs.hand;
    var tl = new TimelineMax();
    tl
    .to(hand, 1, {
      transform: "rotate(0deg)",
      transformOrigin: "center bottom"
    })
    .to(hand, 0.6, {
      transform: "rotate(-20deg)",
      transformOrigin: "center bottom"
    })
    .to(hand, 0.5, {
      transform: "rotate(20deg)",
      transformOrigin: "center bottom"
    })
    .to(hand, 0.4, {
      transform: "rotate(-15deg)",
      transformOrigin: "center bottom"
    })
    .to(hand, 0.3, {
      transform: "rotate(10deg)",
      transformOrigin: "center bottom"
    })
    .to(hand, 0.3, {
      transform: "rotate(0deg)",
      transformOrigin: "center bottom"
    });
  }

  render() {

    return (
      <svg
        ref="hand"
        viewBox="0 0 53 66"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          fill: colors.asphalt,
          width: "1em",
          height: "1em"
        }}
      >
        <path d="M.9 20v-2.8c0-3.5 2.9-6.4 6.4-6.4.8 0 1.5.1 2.2.4V9.7c0-3.5 2.9-6.4 6.4-6.4 1.1 0 2.1.3 2.9.7C19.9 1.9 22 .5 24.5.5s4.7 1.4 5.7 3.5c.9-.5 1.9-.7 2.9-.7 3.5 0 6.4 2.9 6.4 6.4v26.9l2.3-4.1c.9-1.5 2.2-2.6 3.9-3 1.6-.4 3.3-.1 4.7.8 2.4 1.5 3.1 4.9 1.9 8.6-.3.7-6.3 17.9-13.5 25-.4.4-.9.6-1.5.6-.5 0-1.1-.2-1.5-.6-.8-.8-.8-2.2 0-3 6.4-6.4 12.2-22.7 12.5-23.4.5-1.7.4-3.3-.2-3.7-.4-.3-1-.4-1.4-.2-.5.1-1 .5-1.3 1l-6.3 10.9c-.5.8-1.4 1.2-2.4 1-.9-.2-1.6-1.1-1.6-2V9.8c0-1.2-1-2.2-2.2-2.2-1.2 0-2.2 1-2.2 2.2v24.1c0 1.2-.9 2.1-2.1 2.1-1.2 0-2.1-.9-2.1-2.1V6.8c0-1.2-1-2.2-2.2-2.2-1.2 0-2.2 1-2.2 2.2v23.4c0 1.2-.9 2.1-2.1 2.1-1.2 0-2.1-.9-2.1-2.1V9.6c0-1.2-1-2.2-2.2-2.2-1.2 0-2.2 1-2.2 2.2v22.5c0 1.2-.9 2.1-2.1 2.1-1.2 0-2.1-.9-2.1-2.1V17.2c0-1.2-1-2.2-2.2-2.2-1.2 0-2.2 1-2.2 2.2V20c-.3 9.3.1 35.1 5.8 42.2.7.9.6 2.2-.3 3-.4.3-.9.5-1.3.5-.6 0-1.2-.3-1.6-.8C-.2 55.2.8 21.8.9 20zm30.5 21.9c-.8-.8-2.1-.8-3 0-.4.4-8.7 8.8-7.6 20.6.1 1.1 1 1.9 2.1 1.9h.2c1.2-.1 2-1.1 1.9-2.3-.9-9.8 6.3-17.2 6.4-17.3.9-.8.9-2.1 0-2.9z" />
      </svg>
    );
  }
}
