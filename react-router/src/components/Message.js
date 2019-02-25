import React from 'react';

const Message = ({ match }) => (
  <h3>Message with ID {match.params.id} + {match.url}</h3>
);

export default Message;