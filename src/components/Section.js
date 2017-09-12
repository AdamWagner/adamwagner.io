import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'gatsby-link'


class SectionComponent extends React.Component {
    render() {
        return ( 
          <div className={this.props.className}>
              <div style={{paddingLeft:'32.8%'}}>
                {this.props.children}
              </div>
          </div>
        );
    }
  }

var Section = styled(SectionComponent)`
    background-color: ${props => props.color};
    position: relative;
    z-index: 100;
    h1 {
        font-size: 5vw;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom:8em;
    }
    &:first-child {
        padding-top: 1em;
        padding-bottom: 1em;
    }
`
 
export default Section
  
