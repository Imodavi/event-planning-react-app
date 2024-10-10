import React, { useState } from 'react';

const EventForm = ({ onSave, eventToEdit }) => {
  const [title, setTitle] = useState(eventToEdit ? eventToEdit.title : '');
  const [date, setDate] = useState(eventToEdit ? eventToEdit.date : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, date });
    setTitle('');
    setDate('');
  };

  return (
    <div>
      <h2>{eventToEdit ? 'Edit Event' : 'Create Event'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EventForm;
