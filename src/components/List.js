import React from 'react'
import s from './List.module.styl'



export default class List extends React.Component {
  render() {
    let {title, items} = this.props
    return (
      <ul className={s.unstyledList}>
        <li className={s.title}>{title}</li>
        {items.map(i => (
          <li>{i}</li>
        ))}
      </ul>
    )
  }
}
