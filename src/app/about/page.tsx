import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-description">
        Welcome to our Car Rentals service! We provide a wide range of vehicles
        to meet all your travel needs. Whether you're planning a weekend getaway
        or a business trip, we have the perfect car for you.
      </p>
      <h2 className="about-subtitle">Our Mission</h2>
      <p className="about-description">
        Our mission is to offer reliable and affordable car rentals with
        exceptional customer service. We strive to make your travel experience
        smooth and enjoyable.
      </p>
      <h2 className="about-subtitle">Why Choose Us?</h2>
      <ul className="about-list">
        <li>Wide selection of vehicles</li>
        <li>Competitive pricing</li>
        <li>24/7 customer support</li>
        <li>Easy online booking</li>
        <li>Flexible rental options</li>
      </ul>
      <h2 className="about-subtitle">Contact Us</h2>
      <p className="about-description">
        If you have any questions, feel free to contact us at 
        <a href="mailto:support@carrentals.com"> support@carrentals.com</a>.
      </p>
    </div>
  );
};

export default About;
