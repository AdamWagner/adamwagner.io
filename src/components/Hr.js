import React from 'react'
import s from './Hr.module.styl'

class Hr extends React.Component {
    render() {
      return (
        <div class={s.hr} style={this.props.style}></div>
      );
    }
}

export default Hr
