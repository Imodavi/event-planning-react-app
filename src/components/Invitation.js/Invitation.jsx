import React, { useState } from 'react';

const Invitation = ({ event }) => {
  const [email, setEmail] = useState('');
  const [invitations, setInvitations] = useState([]);

  const sendInvitation = () => {
    if (email.trim()) {
      setInvitations([...invitations, email]);
      setEmail('');
    }
  };

  return (
    <div>
      <h2>Send Invitations for {event.title}</h2>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={sendInvitation}>Send Invitation</button>
      <ul>
        {invitations.map((inv, index) => (
          <li key={index}>{inv}</li>
        ))}
      </ul>
    </div>
  );
};

export default Invitation;
