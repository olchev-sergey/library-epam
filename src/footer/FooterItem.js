import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { faCcApplePay } from '@fortawesome/free-brands-svg-icons';

export default class FooterItem extends Component {
  render() {
    return (
      <div className='footer__item'>
        <FontAwesomeIcon icon={faQuestionCircle}/>
        {/* {this.props.item.title} */}
      </div>
    )
  }
}
