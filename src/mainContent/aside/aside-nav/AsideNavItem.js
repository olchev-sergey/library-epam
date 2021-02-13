import React, { Component } from "react";
import "../css/aside.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faHistory,
  faDotCircle,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

export default class AsideNavItem extends Component {
  render() {
    return (
      <li className="aside-nav__item">
        <div className="aside-nav__item-icon">{this.props.icon}</div>
        <div className="aside-nav__item-title">{this.props.title}</div>
      </li>
    );
  }
}
