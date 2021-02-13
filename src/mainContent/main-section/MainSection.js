import React, { Component } from 'react'
import './css/mainSection.css'
import MainSectionHeader from './main-section-header/MainSectionHeader'
import MainSectionContent from './main-section-content/MainSectionContent'

export default class MainSection extends Component {
  render() {
    return (
      <div className='main-section'>
        <MainSectionHeader />
        <MainSectionContent />
      </div>
    )
  }
}
