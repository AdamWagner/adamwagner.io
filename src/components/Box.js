import React from 'react'
import s from './Box.module.styl'



class Wrapper extends React.Component {
  render() {

    let narrow = this.props.narrow ? s.narrow : ''

    return (
      <div className={[s.wrapper, narrow].join(' ')}>
        {this.props.children}
      </div>
    )
  }
}


export default class Box extends React.Component {
  render() {

    let container = this.props.container ? s.container : ''

    let half = this.props.half ? s.half : ''
    let third = this.props.third ? s.third : ''

    let hard = this.props.hard ? s.hard : ''

    return (
      <div className={[s.box, container, half, third, hard].join(' ')}>
        {this.props.container ?
          <Wrapper>
            {this.props.children}
          </Wrapper>
          :
          this.props.children
        }
      </div>
    )
  }
}
