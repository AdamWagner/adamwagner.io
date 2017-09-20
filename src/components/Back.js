import React from 'react'
import s from './Back.module.styl'



export default class Back extends React.Component {
  render() {
    return (
      <div className={s.backButton} onClick={this.props.onClick}></div>       
    )
  }
}
