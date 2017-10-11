import React from 'react'
import s from './Back.module.styl'



export default class Back extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      growIn: false
    };
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({growIn: true})
    }, 200);
  }


  render() {
    let clicked = this.props.backClicked ? s.clicked : ''
    let growIn = this.state.growIn ? s.growIn : ''
    return (
      <div className={[s.backButton, clicked, growIn].join(' ')} onClick={this.props.onClick}>⇠</div>
    )
  }
}
