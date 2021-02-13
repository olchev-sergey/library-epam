import React, { Component } from "react";
import BookCard from "./BookCard";
import "./css/mainSectionContent.css";
export default class MainSectionContent extends Component {
  state = {
    books: [
      {
        title: "Jowels of Nizam",
        author: "Gaivs Nils",
        rating: 5,
        imgSrc: "./img/book4.png",
        id: 1,
      },
      {
        title: "Jowels of Nizam",
        author: "Gaivs Nils",
        rating: 5,
        imgSrc: "./img/book3.png",
        id: 2,
      },
      {
        title: "Jowels of Nizam",
        author: "Gaivs Nils",
        rating: 5,
        imgSrc: "./img/book3.png",
        id: 3,
      },
      {
        title: "Jowels of Nizam",
        author: "Gaivs Nils",
        rating: 5,
        imgSrc: "./img/book3.png",
        id: 4,
      },
      {
        title: "Jowels of Nizam",
        author: "Gaivs Nils",
        rating: 5,
        imgSrc: "./img/book3.png",
        id: 5,
      },
      {
        title: "Jowels of Nizam",
        author: "Gaivs Nils",
        rating: 5,
        imgSrc: "./img/book3.png",
        id: 5,
      },
      {
        title: "Jowels of Nizam",
        author: "Gaivs Nils",
        rating: 5,
        imgSrc: "./img/book5.png",
        id: 5,
      },
      {
        title: "Jowels of Nizam",
        author: "Gaivs Nils",
        rating: 5,
        imgSrc: "./img/book3.png",
        id: 5,
      },
      {
        title: "Jowels of Nizam",
        author: "Gaivs Nils",
        rating: 5,
        imgSrc: "./img/book3.png",
        id: 5,
      },
      
      
    ],
  };

  render() {
    return (
      <div className="main-section-content">
        <div>
          {this.state.books.map((book) => {
            return <BookCard card={book} key={book.id}  />;
          })}
        </div>      
      </div>
    );
  }
}
