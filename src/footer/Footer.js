import React, { Component } from "react";
import "./css/footer.css";
import FooterItem from "./FooterItem";

export default class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      footerItems: [
        {
          title: "?",
          id: 1,
        },
        {
          title: "set",
          id: 2,
        },
      ],
    };
  }

  render() {
    return (
      <div className="footer">
        <div className="footer-content">
          {this.state.footerItems.map((element) => {
            return <FooterItem item={element} key={element.id} />;
          })}
        </div>
      </div>
    );
  }
}
