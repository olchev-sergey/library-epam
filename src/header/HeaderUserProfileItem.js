import React, { Component } from 'react'

export default class HeaderUserProfileItem extends Component {
  render() {
    return (
      <li className='header-drop-down__item'>
        <a href="#">
          {this.props.title}
        </a>
        
      </li>
    )
  }
}
