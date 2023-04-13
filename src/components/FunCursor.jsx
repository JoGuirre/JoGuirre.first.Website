import React, { useRef } from "react";
import "../css/FunCursor.css";

function FunCursor({ handleMouseMove }) {
  const trailCursorRef = useRef(null);
  return (
    <div className="trail-effect" ref={trailCursorRef}>
      Words
    </div>
  );
}

export default FunCursor;
