import React from "react";

const page = () => {
  return (
    <>
      <nav>
        <h1>DevShayan</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <main>
        <div id="left">
          <h1>Car Rentals</h1>
          <h6>Find the perfect car for your next adventure</h6>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button>Explore More</button>
        </div>
        <div id="right">
          <img src="/pexels-jmark-253096-removebg-preview.png" alt="Car" />
        </div>
      </main>

      {/* Car Display Section */}
      <section id="car-display">
        <h2>Our Cars for Rent</h2>
        <div className="car-grid">
          <div className="car-item">
            <img
              src="/pexels-mikebirdy-244206-removebg-preview.png"
              alt="Car 1"
            />
            <h3>Luxury Sedan</h3>
            <p>Experience luxury with top-tier performance.</p>
          </div>
          <div className="car-item">
            <img
              src="/pexels-mikebirdy-116675-removebg-preview.png"
              alt="Car 2"
            />
            <h3>Sport SUV</h3>
            <p>Perfect for family trips and off-road adventures.</p>
          </div>
          <div className="car-item">
            <img
              src="/pexels-screenpost-10029773-removebg-preview.png"
              alt="Car 3"
            />
            <h3>Electric Hatchback</h3>
            <p>Eco-friendly and cost-efficient city driving.</p>
          </div>
        </div>
      </section>

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

export default page;
