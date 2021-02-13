import React, { Component } from 'react'
import HeaderUserProfileItem from './HeaderUserProfileItem'

export default class HeaderUserMenu extends Component {
  state = {
    menuItems: [
      {title: 'menu item', id: 1},
      {title: 'menu item', id: 2},
      {title: 'menu item', id: 3},
      {title: 'menu item', id: 4},
    ],
  }


  render() {
    return (
      <div className='header-drop-down'>
        <ul>
          {this.state.menuItems.map((element) => {
            return <HeaderUserProfileItem title={element.title} key={element.id} />
          })}
        </ul>
      </div>
    )
  }
}
