import React from 'react'
import s from './Nav.module.styl'

class Nav extends React.Component {
    render() {
      let active = this.props.active ? s.active : ''
      return (
        <div className={[s.nav, active].join(' ')}>
          {this.props.children}
        </div>
      );
    }
}

export default Nav
