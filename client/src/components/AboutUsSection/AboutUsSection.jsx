// src/components/AboutUsSection/AboutUsSection.jsx
import React from 'react';
import './AboutUsSection.css';
import aboutImage from '../../assets/images/about-us-image.jpg';

const AboutUsSection = () => {
  return (
    <div className="about-us-section glass">
      <div className="container about-us-container">
        <div className="about-us-text">
          <h2>ABOUT US</h2>
          <p>
          The PUP Graduate School Alumni Network is dedicated to cultivating a lifelong community of graduates who are committed to excellence, connection, and impact. Serving alumni of the Polytechnic University of the Philippines (PUP) Graduate School, our mission is to support professionals who have pursued advanced studies in their fields, earning master's and doctorate degrees that equip them for leadership, innovation, and academic contribution.
          </p>
          <button className="learn-more-btn">Learn More</button>
        </div>
        <div className="about-us-image">
          <img src={aboutImage} alt="About Us" />
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
