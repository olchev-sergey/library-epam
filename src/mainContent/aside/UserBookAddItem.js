import React, { Component } from "react";
import "./css/aside.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHistory } from "@fortawesome/free-solid-svg-icons";

export default class UserBookAddItem extends Component {
  render() {
    return (
      <div className="aside-add-info__item">
        <FontAwesomeIcon icon={faHistory} />
        <div className="aside-add-info__item-text">
          {/* {this.props.info.message[0]} <span>{this.props.info.book}</span>{" "}
          {this.props.info.message[1]} <span>{this.props.info.author}</span>{" "}
          {this.props.info.message[2]} <span>{this.props.info.category}</span> */}

          <p>
            {this.props.info.message[0]}{' '}
            <span>{this.props.info.book}</span>{' '}
            {this.props.info.message[1]} {' '}
            <span>{this.props.info.author}</span>{' '}
            {this.props.info.message[2]} {' '}
            <span>{this.props.info.category}</span>
            {/* {this.props.info.time} */}
          </p>
          <div>{this.props.info.time}</div>
        </div>
      </div>
    );
  }
}
