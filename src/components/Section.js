import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import s from './Section.module.styl'


class Section extends React.Component {
    render() {
        return (
          <div className={s.section}>
              <div className={s.wrapper}>
                {this.props.children}
              </div>
          </div>
        );
    }
  }

export default Section
