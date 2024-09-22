// src/pages/Homepage/Homepage.jsx
import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import EventsSection from '../../components/EventsSection/EventsSection';
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <Banner />
      <EventsSection />
      <FeaturesSection />
    </div>
  );
};

export default Homepage;
