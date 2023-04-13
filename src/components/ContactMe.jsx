import React from "react";
import "../css/ContactMe.css";

function ContactMe() {
  const submitHandler = (e) => {
    e.preventDefault();
    alert("Email Sent!");
  };

  return (
    <div className="contact__box">
      <h1 id="contact__header">Contact Me</h1>
      <div className="contactMe__container">
        <div className="contact__side">
          <h1>Like what you see?</h1>
          <h2>Get in touch with me and let's work something out!</h2>
        </div>
        <div className="contact__container">
          <form id="contact-form" onSubmit={submitHandler}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit" id="submit-button">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
