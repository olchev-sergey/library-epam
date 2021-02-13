import React, { Component } from 'react'
import './css/header.css';


export default class HeaderUserProfile extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    
    this.props.clickToggle();
  }

  render() {
    return (
      <div className='header-item header-user-profile' onClick={this.handleClick}>
        <img src="./img/avatar.png" alt="sd"/>
        <span>John Doe</span>
        <div className='arrow-block'>
          <span className='arrow down' ></span>
        </div>
      </div>
    )
  }
}
