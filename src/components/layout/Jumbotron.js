import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import {Icon} from 'react-fa'

const Jumbotron = () => (
  <div className="wrapper">
    <div className="gallery">
      <div className="overlay-section">
        <h1>Book unique homes and experiences all over the world</h1>
        <Icon className="magnifying-glass" name="search" />
        <input className="searchbar" type="text" placeholder="Try homes in Bangkok" />
        <input className="search-button" type="button" value="Search"/>
      </div>
      <img src={require('./images/jumbo1.jpg')} alt="jumbo" style={{width: '100%', opacity: '0'}}/>
    </div>
  </div>
);


export default Jumbotron;
