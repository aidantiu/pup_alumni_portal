import React from 'react';
import PropTypes from 'prop-types';
import './EventListing.css';
import eventImg from '../../assets/images/eventimage1.png'; // Default image path

const EventListing = ({ eventData, onEdit }) => {
  // Extract date information to display it in a specific format
  const eventDate = new Date(eventData.event_date);
  const day = eventDate.getDate();
  const month = eventDate.toLocaleString('default', { month: 'short' });

  // Determine the preview image to use (first photo or default image)

  console.log(eventData.photos[0].photo_path);

  const eventPhoto =
    eventData.photos && eventData.photos.length > 0
      ? eventData.photos[0].photo_path // Use the first photo
      : eventImg; // Fallback to default image

  return (
    <div className="event-listing-wrapper">
      <div className="event-listing">
        {/* Left-Aligned Date Section */}
        <div className="event-date-section">
          <div className="event-date-month">{month}</div>
          <div className="event-date-day">{day}</div>
        </div>

        {/* Image and Event Details */}
        <div className="event-image-and-details">
          {/* Event Image */}
          <div className="event-image-container">
            <img
              src={eventPhoto} // Use the dynamic photo or fallback image
              alt={eventData.event_name || 'Event Image'}
              className="event-image"
            />
          </div>

          {/* Event Information */}
          <div className="event-details">
            <h5 className="event-title">{eventData.event_name}</h5>
            <p className="event-info-listing">
              <strong>{eventData.location}</strong> | {eventDate.toDateString()} {/* Location and Date */}
            </p>
            <p className="event-description">{eventData.description}</p>
          </div>
        </div>

        {/* Right-Aligned Content */}
        <div className="event-additional-info">
          <span className="event-type">{eventData.type}</span>
          <span className="edit-icon" onClick={() => onEdit(eventData.event_id)}>✎</span>
        </div>
      </div>
    </div>
  );
};

// PropTypes validation for the component props
EventListing.propTypes = {
  eventData: PropTypes.object.isRequired, // Event data should be an object
  onEdit: PropTypes.func.isRequired,      // onEdit should be a function to handle editing
};

export default EventListing;
