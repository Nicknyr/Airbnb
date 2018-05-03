import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header.js';
import Footer from './components/layout/Footer.js';
import {Icon} from 'react-fa';
import ReactDOM from 'react-dom';
import SearchBar from './components/elements/SearchBar.js';
import Button from './components/elements/ShowAllButton.js';
import HomePage from './components/layout/HomePage.js';
import Jumbotron from './components/layout/Jumbotron.js';


class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Header />
        <HomePage />
        <Footer />
      </div>
    );
  }
}

export default App;
