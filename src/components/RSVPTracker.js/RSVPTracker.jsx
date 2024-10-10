import React from 'react';

const RSVPTracker = ({ rsvps }) => {
  return (
    <div>
      <h2>RSVP Status</h2>
      <ul>
        {rsvps.map((rsvp, index) => (
          <li key={index}>
            {rsvp.email} - {rsvp.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RSVPTracker;
