import React from 'react';
import './contact.css';

const AboutPage = () => {
  return (
    <>
      <nav>
        <h1>DevShayan</h1>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>

      {/* Contact Form Section */}
      <div className="contact-container">
        <h2 className="form-title">Contact Us</h2>
        <form className="contact-form">
          <input type="text" className="form-input" placeholder="Your Name" required />
          <input type="email" className="form-input" placeholder="Your Email" required />
          <textarea className="form-input" placeholder="Your Message" required></textarea>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>

      {/* Social Icons */}
      <div className="social-icons">
        <a href="https://github.com/iamshayan40" target="_blank">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.instagram.com/iamshayan40/" target="_blank">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com/profile.php?id=61556393203323" target="_blank">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://linkedin.com" target="_blank">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://portfolio-devshayan.vercel.app/" target="_blank">
          <i className="fas fa-user"></i>
        </a>
      </div>

      {/* Footer */}
      <footer>
        <p>© 2024 DevShayan Car Rentals. All rights reserved.</p>
      </footer>
    </>
  );
};

export default AboutPage;
