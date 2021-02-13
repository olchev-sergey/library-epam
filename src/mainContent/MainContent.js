import React, { Component } from 'react'
import './css/mainContent.css'
import Aside from './aside/Aside'
import MainSection from './main-section/MainSection'


export default class MainContent extends Component {
  render() {
    return (
      <div className='main-content'>
        <Aside />
        <MainSection />

      </div>
    )
  }
}
