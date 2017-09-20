import React from 'react'
import Link from "gatsby-link";
import s from './Nav.module.styl'

class NavItem extends React.Component {
    render() {
      let {to, active, name, idx} = this.props
      return (
        <Link className={active ? s.active: 'false'} to={to} key={idx}>{name}</Link>
      );
    }
}

export default NavItem
