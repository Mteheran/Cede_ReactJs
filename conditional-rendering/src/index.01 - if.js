import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const UserGreeting = (props) => {
    return <h1>Welcome back!</h1>;
}

const GuestGreeting = (props) => {
    return <h1>Please sign up.</h1>;
}

const Greeting = (props) =>  {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }


ReactDOM.render(<Greeting isLoggedIn={false}/>, document.getElementById('root'));
