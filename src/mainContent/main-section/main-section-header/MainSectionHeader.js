import React, { Component } from 'react'
import HeaderTitle from './HeaderTitle'
import HeaderNav from './HeaderNav'
import './css/mainSectionHeader.css'

export default class MainSectionHeader extends Component {

  state = {
    headerTitle: 'Browse Available Books',
    navLinks: [
      {
        title: 'All Books',
        id: '1',
      },
      {
        title: 'Most Recent',
        id: '2',
      },
      {
        title: 'Most Popular',
        id: '3',
      },
      {
        title: 'Free Books',
        id: '4',
      },
    ]
  }

  render() {
    return (
      <div className='main-section-header' >
        <HeaderTitle title={this.state.headerTitle} />
        <HeaderNav links={this.state.navLinks}/>
      </div>
    )
  }
}
