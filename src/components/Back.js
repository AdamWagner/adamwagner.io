import React from 'react'
import s from './Back.module.styl'



export default class Back extends React.Component {
  render() {
    let clicked = this.props.backClicked ? s.clicked : ''
    return (
      <div className={[s.backButton, clicked].join(' ')} onClick={this.props.onClick}>⇠</div>       
    )
  }
}
