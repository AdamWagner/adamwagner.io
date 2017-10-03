import React from 'react'
import s from './GridItem.module.styl'




export default class GridItem extends React.Component {

  render() {
    let p = this.props
    let centerTwo = p.centerTwo ? s.centerTwo : ''
    let leftOne = p.leftOne ? s.leftOne : ''
    let leftThree = p.leftThree ? s.leftThree : ''
    let rightOne = p.rightOne ? s.rightOne : ''
    let full = p.full ? s.full : ''

    let classes = [centerTwo, leftOne, leftThree, rightOne, full, p.className]


    return (
      <div className={classes.join(' ')}>
        {this.props.children}
      </div>
    )
  }
}
