import React, { Component } from 'react'
import './css/aside.css'
import UserBookAddItem from './UserBookAddItem'


export default class UserBookAddInfo extends Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div className='aside-add-info' style={{height: `${this.height}px`}}>
        {/* <div> */}
        {this.props.addInfo.map((elem) => {
          return <UserBookAddItem info={elem} key={elem.id} />
        })}
        {/* </div> */}
       
      </div>
    )
  }
}
