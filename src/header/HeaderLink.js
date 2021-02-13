import React, { Component } from 'react'
// import './css/header.css';


export default class HeaderLink extends Component {
  
  render() {
    return (
      <a href="#" className='header-item'>
        <span>{this.props.title}</span>
      </a>
    )
  }
}
