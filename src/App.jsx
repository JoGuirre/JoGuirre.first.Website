import React, { useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import FunCursor from "./components/FunCursor";

function App() {
  // const trailCursorRef = useRef(null);

  // function handleMouseMove(event) {
  //   const trailCursor = trailCursorRef.current;
  //   if (trailCursor) {
  //     const oldPos = {
  //       x: parseInt(trailCursor.style.left),
  //       y: parseInt(trailCursor.style.top),
  //     };
  //     const newPos = {
  //       x: event.clientX,
  //       y: event.clientY,
  //     };
  //     const diffX = newPos.x - oldPos.x;
  //     const diffY = newPos.y - oldPos.y;
  //     trailCursor.style.left = `${newPos.x}px`;
  //     trailCursor.style.top = `${newPos.y}px`;
  //     console.log(`Moved by ${diffX} in X and ${diffY} in Y`);
  //   }
  // }
  return (
    <div className="app">
      {/* <FunCursor /> */}
      <Header />
      <Body />
    </div>
  );
}

export default App;
