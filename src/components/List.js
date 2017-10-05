import React from 'react'
import s from './List.module.styl'


/*
Can accept an array of strings, or
an array of objects containing a name and an href
*/

export default class List extends React.Component {
  render() {
    let {title, items, style, multiline} = this.props

    let listItems = items.map((i, idx) => {
      if (typeof i == 'string') {
        return <li key={idx}>{i}</li>
      } else {
        return <li key={idx}><a target="_blank" href={i.href}>{i.name}</a></li>
      }
    })

    let mlClass = multiline ? s.multiline : ''

    return (
      <ul className={[s.unstyledList, mlClass].join(' ')} style={style}>
        <li className={s.title}>{title}</li>
        {listItems}
      </ul>
    )
  }
}
