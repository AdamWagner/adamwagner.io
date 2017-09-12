import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const titleText = "Adam Wagner"
const metadata = [
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]


class TemplateWrapper extends React.Component {
  render() {
    return (
      <div style={{width: '100%'}}>
        <Helmet title={titleText} meta={metadata} >
          <link href="https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,900" rel="stylesheet" />
        </Helmet>

          <div>
            {this.props.children()}
          </div>

      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
