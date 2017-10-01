import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import _ from 'lodash'
import s from './index.module.styl'

const titleText = "Adam Wagner"
const metadata = [
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]


class TemplateWrapper extends React.Component {


  componentDidMount() {
    let pageName = _.startCase(window.location.pathname).replace('/', '')
    this.setState({pageName: pageName})
  }

  render() {
    return (
      <div style={{width: '100%'}}>
        <Helmet title={titleText} meta={metadata} >
          <link href="https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,900" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=PT+Serif" rel="stylesheet" />
          <style type="text/css">{`
            .react-layout-components--box {
              display: -webkit-box;
              display: -moz-box;
              display: -ms-flexbox;
              display: -webkit-flex;
              display: flex;
            }
          `}</style>
        </Helmet>

          <canvas className={s.canvas} id="canvas"></canvas>
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
