import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import withRouter from 'react-router-dom/withRouter'

const titleText = "Adam Wagner"
const metadata = [
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]

import './animations.scss'



class TransitionHandler extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.location.pathname === window.location.pathname;
  }

  render() {
    const {children} = this.props;
    return (
      <div className="transition-container">
        {children}
      </div>
    );
  }
}


const TemplateWrapper = ({ children }) => (
  <div style={{width: '100%'}}>
    <Helmet title={titleText} meta={metadata} >
       <link href="https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,900" rel="stylesheet" />
    </Helmet>

    <TransitionGroup>
      <CSSTransition key={location.pathname} classNames="example" timeout={{ enter: 3000, exit: 3000 }} >
        <TransitionHandler location={location} >

          <div>
            {children()}
          </div>

        </TransitionHandler>
      </CSSTransition>
    </TransitionGroup>

  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default withRouter(TemplateWrapper)
