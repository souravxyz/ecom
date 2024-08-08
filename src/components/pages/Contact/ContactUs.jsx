// ContactUs.jsx
import React from "react";
import "./ContactUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="contact-header">
        <img src="https://media.istockphoto.com/id/1398923416/photo/close-up-portrait-of-smiling-businesswoman-ellen-with-arms-crossed-3d-rendering-on-white.webp?b=1&s=170667a&w=0&k=20&c=HLr4nKEpCfetBF3hczAxqBFQhdMqSo5YKNttjIRHIx8=" alt="Logo" className="logo" />
        <h2>Contact Us</h2>
      </div>
      <div className="contact-details">
        <div className="contact-info">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
          <span>123 Street Name, City, Country</span>
        </div>
        <div className="contact-info">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <span>contact@example.com</span>
        </div>
        <div className="contact-info">
          <FontAwesomeIcon icon={faPhone} className="icon" />
          <span>+123 456 7890</span>
        </div>
      </div>
      <div className="contact-form">
        <h3>Send us a Message</h3>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
