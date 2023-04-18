import React from "react";
import "../css/JoinedPopup.css";

function JoinedPopup({ setIsOpen }) {
  return (
    <div className="popup__container">
      <div className="things">
        <h1>Your email has been sent!</h1>
        <p>
          <h3>Thank you for your message!</h3>
          <br />I will be in contact within 2 business days.
          <br />
          Please browse my projects!
        </p>
        <button id="close__popup" onClick={() => setIsOpen(false)}>
          Close
        </button>
      </div>
    </div>
  );
}

export default JoinedPopup;
