import React, { Component } from 'react'
import './css/header.css';
import HeaderLink from './HeaderLink'
import HeaderUserProfile from './HeaderUserProfile'
import HeaderUserMenu from './HeaderUserMenu'


export default class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      links: [
        {title: 'Help Center', id: 1},
        {title: 'Our Support', id: 2},
      ],
      haveProfileMenu: false,
    }

    this.openProfileMenu = this.openProfileMenu.bind(this);
  }

  openProfileMenu() {
    this.setState({
      haveProfileMenu: !this.state.haveProfileMenu
    });
  }

  render() {
    return (
      <div className='header'>
        {this.state.links.map((link) => {
          return <HeaderLink title={link.title} key={link.id} />
        })}
        <HeaderUserProfile clickToggle={this.openProfileMenu}/>
        {
          this.state.haveProfileMenu &&
          <HeaderUserMenu />
        }
      </div>
    )
  }
}
