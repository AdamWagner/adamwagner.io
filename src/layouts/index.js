import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import _ from 'lodash'

const titleText = "Adam Wagner"
const metadata = [
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]


class TemplateWrapper extends React.Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     pageName: null
  //   };


  componentDidMount() {
    let pageName = _.startCase(window.location.pathname).replace('/', '')
    this.setState({pageName: pageName})
  }

  render() {
    return (
      <div style={{width: '100%'}}>
        {/* <Helmet title={this.state.pageName ? `${this.state.pageName} | ${titleText}` : titleText} meta={metadata} > */}
        <Helmet title={titleText} meta={metadata} >
          <link href="https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,900" rel="stylesheet" />
        </Helmet>

          <div>
            {this.props.children()}
          </div>

      <canvas id="canvas"></canvas>

      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}


export default TemplateWrapper
