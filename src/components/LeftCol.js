import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

class NavComponent extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
            {this.props.children}
            </div>
        );
    }
}

const Nav = styled(NavComponent)`
    width: 32.8vw;
    height: 100vh;
    padding: 1em;
    position: fixed;
    z-index: 200;
    font-weight: 700;

    a {
        display: block;
        text-decoration: none;
        line-height: 3;
        color: black;
        font-size: 3vw;
        opacity: 0.2;
    }

    a.nav-active {
        opacity: 0.7;
    }
`
export default Nav
