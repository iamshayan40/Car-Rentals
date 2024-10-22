import React from 'react';
import './about.css';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <>
      <nav>
        <h1>DevShayan</h1>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <main>
        <div id="left">
          <h2>About Us</h2>
          <h6>Your Trusted Car Rental Service</h6>
          <p>
            Welcome to DevShayan Car Rentals, your premier destination for quality car rental services. Our mission is to provide our customers with a seamless and hassle-free experience, whether you need a car for a day, a week, or even longer.
          </p>
          <p>
            We offer a wide range of vehicles to suit every need, from compact cars for city driving to spacious SUVs for family trips. All our cars are well-maintained, insured, and equipped with the latest technology to ensure your safety and comfort.
          </p>
          <p>
            At DevShayan Car Rentals, we pride ourselves on our exceptional customer service. Our team is dedicated to assisting you at every step, from selecting the right vehicle to providing local recommendations for your travels. We believe in building long-lasting relationships with our clients based on trust and reliability.
          </p>
          <p>
            Thank you for choosing DevShayan Car Rentals. We look forward to being a part of your journey!
          </p>
          <button>Contact Us</button>
        </div>
      </main>
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
