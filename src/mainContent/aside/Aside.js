import React, { Component } from "react";
import "./css/aside.css";
import AsideNav from "./aside-nav/AsideNav";
import UserBookAddInfo from "./UserBookAddInfo";
import { FaBook, FaShoppingCart, FaStar, FaList, FaHistory } from "react-icons/fa";
import { IoEarthOutline } from 'react-icons/io5'
import { BsCircleFill } from 'react-icons/bs'
 
export default class Aside extends Component {
  state = {
    navItems: [
      {
        title: "Now reading",
        id: 1,
        icon: <FaBook />,
      },
      {
        title: "Browse",
        id: 2,
        icon: <IoEarthOutline />,
      },
      {
        title: "Buy books",
        id: 3,
        icon: <FaShoppingCart />,
      },
      {
        title: "Favourite Books",
        id: 4,
        icon: <FaStar />,
      },
      {
        title: "Wishlist",
        id: 5,
        icon: <FaList />,
      },
      {
        title: "History",
        id: 6,
        icon: <FaHistory />,
      },
    ],
    bookSortingNav: [
      {
        title: "Must Read Titles",
        id: 1,
        icon: <BsCircleFill size={8} color={'red'} />,
      },
      {
        title: "Best of List",
        id: 2,
        icon: <BsCircleFill size={8} color={'orange'} />,
      },
      {
        title: "Classic Novels",
        id: 3,
        icon: <BsCircleFill size={8} color={'aqua'} />,
      },
      {
        title: "Non Fiction",
        id: 4,
        icon: <BsCircleFill size={8} color={'grey'} />,
      },
    ],
    bookAddingInfo: [
      {
        book: "Fight Club",
        author: "Chuck Palenchuk",
        category: "Must Read Title",
        time: "24 minutes ago",
        message: ["You added", "by", "to your"],
        id: 1,
      },
      {
        book: "Fight Club",
        author: "Chuck Palenchuk",
        category: "Must Read Title",
        time: "48 minutes ago",
        message: ["You added", "by", "to your"],
        id: 2,
      },
    ],
  };

  render() {
    return (
      <div className="aside-content">
        <div className="aside-block-item">
          <button
            className="aside-add-block-btn"
            onClick={() => console.log("c")}
          >
            <span> + </span> add a block{" "}
          </button>{" "}
        </div>
        <div className="aside-block-item">
          <AsideNav menuItems={this.state.navItems} />{" "}
        </div>
        <div className="aside-block-item">
          <AsideNav menuItems={this.state.bookSortingNav} />{" "}
        </div>
        <div className="aside-block-item">
          <UserBookAddInfo addInfo={this.state.bookAddingInfo} />{" "}
        </div>{" "}
      </div>
    );
  }
}
