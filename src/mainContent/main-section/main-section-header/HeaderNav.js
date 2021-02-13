import React, { Component } from 'react'
import HeaderNavItem from './HeaderNavItem'
import HeaderNavSearchInput from './HeaderNavSearchInput'

export default class HeaderNav extends Component {
  render() {
    return (
      <div className='main-section-header__nav'>
        <div className="main-section-header__nav-links">
          {
            this.props.links.map((link) => {
              return <HeaderNavItem title={link.title} key={link.id} />;
            })
          }
        </div>      
        
        <HeaderNavSearchInput />
      </div>
    )
  }
}
