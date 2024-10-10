import React, { useState } from 'react';
import EventForm from './components/EventForm.js/EventForm';
import EventList from './components/EventList.js/EventList';
import Invitation from './components/Invitation.js/Invitation';
import RSVPTracker from './components/RSVPTracker.js/RSVPTracker';
import Collaborators from './components/Collaborators.js/Collaborators';


function App() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [rsvps, setRsvps] = useState([]);

  const addEvent = (newEvent) => {
    if (selectedEvent !== null) {
      const updatedEvents = events.map((event, index) =>
        index === selectedEvent ? newEvent : event
      );
      setEvents(updatedEvents);
      setSelectedEvent(null);
    } else {
      setEvents([...events, newEvent]);
    }
  };

  const deleteEvent = (index) => {
    setEvents(events.filter((_, i) => i !== index));
  };

  const editEvent = (index) => {
    setSelectedEvent(index);
  };

  return (
    <div>
      <h1>Event Planning App</h1>
      <EventForm onSave={addEvent} eventToEdit={events[selectedEvent]} />
      <EventList events={events} onEdit={editEvent} onDelete={deleteEvent} />
      {events.length > 0 && (
        <>
          <Invitation event={events[0]} />
          <RSVPTracker rsvps={rsvps} />
          <Collaborators event={events[0]} />
        </>
      )}
    </div>
  );
}

export default App;
