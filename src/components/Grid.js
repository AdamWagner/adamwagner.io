import React from 'react'
import s from './Grid.module.styl'



const Grid = (props) => (
    <div
      style={props.style}
      className={s.grid}
    >
      {props.children}
  </div>
)


export default Grid
