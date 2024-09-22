// src/components/EventsSection/EventsSection.jsx
import React from 'react';
import './EventsSection.css';
import eventImage1 from '../../assets/images/eventimage1.png';
import eventImage2 from '../../assets/images/eventimage2.jpg';
import eventImage3 from '../../assets/images/eventimage3.jpg';
import eventImage4 from '../../assets/images/eventimage4.jpg';

// Sample event data
const eventsData = [
  {
    id: 1,
    image: eventImage1,
    date: 'Sep. 17-18',
    title: 'Register for the PUP Alumni Leadership Conference',
  },
  {
    id: 2,
    image: eventImage2,
    date: 'Sep. 17-18',
    title: 'Register for the PUP Alumni Leadership Conference',
  },
  {
    id: 3,
    image: eventImage3,
    date: 'Sep. 17-18',
    title: 'Register for the PUP Alumni Leadership Conference',
  },
  {
    id: 4,
    image: eventImage4,
    date: 'Sep. 17-18',
    title: 'Register for the PUP Alumni Leadership Conference',
  },
];

const EventsSection = () => {
  return (
    <div className="events-section">
      <div className="container">
        <h2 className="section-title">EVENTS</h2>
        <div className="row">
          {eventsData.map((event) => (
            <div key={event.id} className="col-lg-3 col-md-4 col-sm-6 col-6"> {/* Added col-6 for mobile view */}
              <div className="event-card">
                <img src={event.image} alt={event.title} className="event-image" />
                <div className="event-info">
                  <h3 className="event-date">{event.date}</h3>
                  <p className="event-title">{event.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsSection;
