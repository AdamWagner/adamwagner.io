import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import PageTransition from 'react-router-page-transition';
import withRouter from 'react-router-dom/withRouter'
import action from '../components/action';

const titleText = "Adam Wagner"
const metadata = [
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]


class TemplateWrapper extends React.Component {

  constructor(...args) {
  super(...args);
  this.state = {
    clickedItemData: null,
    };
  }

  componentDidMount() {
    // Receive data from the clicked item
    this.obsClickedItemData = action
    .filter(a => a.name === 'CLICKED_ITEM_DATA')
    .map(a => a.data)
    .subscribe(clickedItemData => this.setState({ clickedItemData }));
  }

  componentWillUnmount() {
    this.obsClickedItemData.dispose();
  }

  render() {
    return (
      <div style={{width: '100%'}}>
        <Helmet title={titleText} meta={metadata} >
          <link href="https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,900" rel="stylesheet" />
        </Helmet>

        <PageTransition data={{ clickedItemData: this.state.clickedItemData }}>
          <div>
            {this.props.children()}
          </div>
        </PageTransition>

      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default withRouter(TemplateWrapper)
