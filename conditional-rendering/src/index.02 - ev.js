import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const UserGreeting = props => {
  return <h1>Welcome back!</h1>;
};

const GuestGreeting = props => {
  return <h1>Please sign up.</h1>;
};

const Greeting = props => {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
};

const LoginButton = props => {
  return <button onClick={props.onClick}>Login</button>;
};

const LogoutButton = props => {
  return <button onClick={props.onClick}>Logout</button>;
};

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  };

  render = () => {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  };
}

ReactDOM.render(<LoginControl />, document.getElementById('root'));
