import React from "react";
import s from "./HeroImage.module.styl";

class HeroImage extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className={s.heroWrapper}>
        <div
          className={s.heroImage}
          style={{
            backgroundImage: `url(${this.props.src})`,
            visibility: this.props.inTransition ? "hidden" : "visible"
          }}
        />
      </div>
    );
  }
}

export default HeroImage;
