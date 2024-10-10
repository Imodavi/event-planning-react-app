import React, { useState } from 'react';

const Collaborators = ({ event }) => {
  const [collaborators, setCollaborators] = useState([]);
  const [email, setEmail] = useState('');

  const addCollaborator = () => {
    if (email.trim()) {
      setCollaborators([...collaborators, email]);
      setEmail('');
    }
  };

  return (
    <div>
      <h2>Collaborators for {event.title}</h2>
      <input
        type="email"
        placeholder="Collaborator Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={addCollaborator}>Add Collaborator</button>
      <ul>
        {collaborators.map((collab, index) => (
          <li key={index}>{collab}</li>
        ))}
      </ul>
    </div>
  );
};

export default Collaborators;
