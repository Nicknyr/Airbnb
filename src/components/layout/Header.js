import React, { Component } from 'react';
import SearchBar from '../elements/SearchBar.js';
import {Icon} from 'react-fa';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  render() {
    return (
      <div className="header">
        <ul className="nav">
          <li>Become a host</li>
          <li>Earn credit</li>
          <li>Help</li>
          <li>Sign up</li>
          <li>Log in</li>
        </ul>
        <div className="logo-section">
          <img src={require('./images/small_logo.png')} alt="logo" height="35" width="35" />
          <Icon name="angle-down" />
        </div>

        <div className="search-bar">
        <button className="search-button">
          <SearchBar />
        </button>
        </div>


        <hr />
      </div>
    );
  }
}

export default Header;
