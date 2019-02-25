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

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;

  if (unreadMessages.length <= 0) {
    return null;
  }

  return (
    <div>
      <h2>You have {unreadMessages.length} unread messages.</h2>
    </div>
  );
}

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
    let content;

    if (isLoggedIn) {
      content = (
        <div>
          <LogoutButton onClick={this.handleLogoutClick} />{' '}
          <Mailbox unreadMessages={this.props.messages} />
        </div>
      );
    } else {
      content = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {content}
      </div>
    );
  };
}

const messages = ['React', 'Re: React', 'Re:Re: React'];

ReactDOM.render(
  <LoginControl messages={messages} />,
  document.getElementById('root')
);
