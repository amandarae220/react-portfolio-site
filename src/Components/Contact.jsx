import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact">
    <div id="formContainer">
      <h2>Contact Me</h2>
      <form action="mailto:amandarae19@gmail.com" method="post">
        <div className="labelRow">
          <label>Your Name:</label>
        </div>
        <div className="inputRow">
          <input type="text" id="name" name="name" required />
        </div>
        <div className="labelRow">
          <label>Your Email:</label>
        </div>
        <div className="inputRow">
          <input type="email" id="email" name="email" required />
        </div>
        <div className="labelRow">
          <label>Your Message:</label>
        </div>
        <div className="inputRow">
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <div className="buttonRow">
          <button type="submit"><strong>Send Message</strong></button>
        </div>
      </form>
    </div>
  </section>
  );
};

export default Contact;