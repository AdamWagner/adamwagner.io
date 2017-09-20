import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import s from './Nav.module.styl'

class Nav extends React.Component {
    render() {
      return (
        <div className={s.nav}>
          {this.props.children}
        </div>
      );
    }
}

export default Nav
