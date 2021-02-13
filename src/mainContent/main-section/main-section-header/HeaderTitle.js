import React, { Component } from 'react'

export default class HeaderTitle extends Component {
  render() {
    return (
      <div className='main-section-header__title'>
        {this.props.title}
      </div>
    )
  }
}
