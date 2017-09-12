import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'gatsby-link'

class RightColComponent extends React.Component {
    render() {
      return ( 
          <div className={this.props.className}>
              {this.props.children}
          </div>
        );
    }
  }

const RightCol = styled(RightColComponent)`
    background: inherit;
`
 
export default RightCol
  
