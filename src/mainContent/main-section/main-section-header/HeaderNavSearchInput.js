import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default class HeaderNavSearchInput extends Component {
  render() {
    return (
      <div className='main-section-header__nav-search-item'>

        <form action="" method='get'>
          <input data-search='search-input' type="text" name="" id="" placeholder="Enter Keywords" />
          <button type="submit">
           <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>

      </div>
    );
  }
}
