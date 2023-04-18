import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "../css/ContactMe.css";
import JoinedPopup from "./JoinedPopup";

function ContactMe() {
  const [state, handleSubmit] = useForm("meqwpvaq");
  const [isOpen, setIsOpen] = useState(false);

  if (state.succeeded && isOpen) {
    return <JoinedPopup setIsOpen={setIsOpen} />;
  }

  return (
    <div id="target__contact" className="contact__box">
      <h1 id="contact__header">Contact Me</h1>
      <div className="contactMe__container">
        <div className="contact__side">
          <h1>Like what you see?</h1>
          <h2>Get in touch with me and let's work something out!</h2>
        </div>
        <div className="contact__container">
          <form
            id="contact-form"
            action="https://formspree.io/f/meqwpvaq"
            onSubmit={handleSubmit}
          >
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <button
              type="submit"
              id="submit-button"
              disabled={state.submitting}
              onClick={() => setIsOpen(true)}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
