import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from './cmr1-logo.png';
import './App.css';
import routes from './routes';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to CMR1!<sup>&reg;&copy;</sup></h2>
                </div>
                <p className="App-intro">
                    Welcome to CMR1&reg; homepage!
                </p>
                <Link to="/ContactUs">Contact Us</Link>
                <Link to="/WhatWeDo">What We Do</Link>
                <main>
                    {this.props.children}
                </main>
                <div className="App-Footer">
                    <footer>Copyright &copy; 2017</footer>
                    <footer>Designed by Brandon Cabael</footer>
                    <footer>
                        <a href="https://github.com/cmr1"><img src="/GitHub-Mark-32px.png" alt="Github" /></a>
                        <a href="https://www.npmjs.com/~cmr1"><img src="/npm-icon.png" alt="NPMJS" width="32" height="32" /></a>
                        <a href="https://travis-ci.org/cmr1"><img src="/Travis-CI-icon.png" alt="TravisCI" width="32" height="32" /></a>
                    </footer>
                    <footer>Contact <a href="emailto:charliemcclung.com">Charlie McClung</a> or <a href="emailto:brandon.cabael@gmail.com">Brandon Cabael</a> with any question/comments.</footer>
                </div>
            </div>
            );
        }
}

export default App;
