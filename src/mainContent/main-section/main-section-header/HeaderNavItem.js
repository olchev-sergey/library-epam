import React, { Component } from 'react'

export default class HeaderNavItem extends Component {
  render() {
    return (
      <a href="#" className='main-section-header__nav-item'>
        {this.props.title}
      </a>
    )
  }
}
