import React, { Component } from 'react'
import StarRating from 'react-svg-star-rating'

export default class BookCard extends Component {

  constructor(props) {
    super(props)
    
    this.card = props.card;

  }
  
  render() {
    return (
      <div className='main-section-content__card-wrapper flex-center card-wrapper' >
        <div className='main-section-content__card-content card-content'>
            <div className='card-content__img'>
              <img src={this.card.imgSrc} alt="" width='150'/>
            </div>
            <div className='card-content__title'>{this.card.title}</div>
            <div className='card-content__author'><span>by</span> {this.card.author}</div>
            <div className='card-content__rating'>
              <StarRating isHalfRating={true} size={15} initialRating={this.card.rating}/>
            </div>
        </div>
      </div>
    )
  }
}
