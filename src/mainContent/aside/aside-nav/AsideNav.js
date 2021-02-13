import React, { Component } from 'react'
import AsideNavItem from './AsideNavItem'
import '../css/aside.css'


export default class AsideNav extends Component {
  render() {
    return (       
      <ul className='aside-nav'>
        {
          this.props.menuItems.map((item) => {
            return <AsideNavItem title={item.title} icon={item.icon} key={item.id} />
          })
        }
      </ul>
    )
  }
}
