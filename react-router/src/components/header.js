import React from 'react';
import logo from '../logo.svg';
import {
    Link
  } from 'react-router-dom';
  

const Header = () => (
    <div>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="menu">
        <ul>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/messages">Messages</Link> </li>
            <li> <Link to="/about">About</Link> </li>
        </ul>
        </div>
</div>
);

export default Header;