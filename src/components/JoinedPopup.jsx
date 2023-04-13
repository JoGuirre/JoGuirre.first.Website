import React from "react";
import "../css/JoinedPopup.css";

function JoinedPopup() {
  return (
    <div className="popup__container">
      <div className="things">
        <h1>Your email has been sent!</h1>
        <p>
          Thank you for your message!
          <br />I will be in contact within 2 business days.
          <br />
          Until then, go flub urself beotch.
        </p>
      </div>
    </div>
  );
}

export default JoinedPopup;
