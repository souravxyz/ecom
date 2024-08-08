import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          Welcome to our online store! We are committed to providing you with
          the best products and exceptional customer service. Our journey
          started with a passion for quality and customer satisfaction, and we
          strive to maintain that standard in everything we do.
        </p>
        <p>
          Our team is dedicated to sourcing the finest products from around the
          world, ensuring that each item meets our high standards of quality and
          durability. We believe in transparency and honesty, which is why we
          provide detailed product descriptions and customer reviews to help you
          make informed purchasing decisions.
        </p>
        <p>
          Thank you for choosing us as your trusted shopping destination. We
          look forward to serving you and making your shopping experience as
          enjoyable as possible.
        </p>
      </div>
      <div className="about-image">
        <img src="https://images.unsplash.com/photo-1607004468138-e7e23ea26947?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFib3V0fGVufDB8fDB8fHww" alt="About Us" />
      </div>
    </div>
  );
};

export default About;
