import React from 'react';

const EventList = ({ events, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Your Events</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <h3>{event.title}</h3>
            <p>Date: {event.date}</p>
            <button onClick={() => onEdit(index)}>Edit</button>
            <button onClick={() => onDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
