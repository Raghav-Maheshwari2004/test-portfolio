import React from 'react';
import './Footer.css';
import assets from '../../assets/assests';

const Footer = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h1>Get in Touch</h1>
        <p>Always ready to hear about opportunities</p>

        {/* Clickable Mail Image */}
        <a href="mailto:maheshwari.raghav2004@gmail.com">
        <button> 
          <img src={assets.mail} alt="Send Email" className="mail-icon" />Send Message
        </button>
        </a>
      </div>
    </section>
  );
}

export default Footer;