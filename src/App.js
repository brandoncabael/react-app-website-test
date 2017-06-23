import React, { Component } from 'react';
import logo from './cmr1-logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to CMR1!&reg;</h2>
        </div>
        <p className="App-intro">
          Welcome to CMR1&reg; homepage!
        </p>
        <p className="App-body"> 
        Contact <a href="emailto:charliemcclung.com">Charlie McClung</a> or <a href="emailto:brandon.cabael@gmail.com">Brandon Cabael</a> with any question/comments.
        </p>  
        <footer>Copyright &copy; 2017</footer>
        <footer>Designed by Brandon Cabael</footer>
      </div>
    );
  }
}

export default App;
