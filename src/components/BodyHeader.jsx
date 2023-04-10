import React, { useEffect, useState } from 'react'
import '../css/BodyHeader.css'

function BodyHeader() {
  const [text, setText] = useState('');
  const introText = "Hi,\nI'm Josh,\nweb developer";
  const subText = "Front-End | Back-End | Full Stack";
  const delay = 50;

  useEffect(() => {
    let currentIndex = 0;
    const currentInterval = setInterval(() => {
      if (currentIndex >= introText.length + subText.length + 1) {
        clearInterval(currentInterval);
      } else if (currentIndex < introText.length) {
        setText(introText.slice(0, currentIndex + 1));
      } else if (currentIndex === introText.length) {
        setText(introText + '\n');
      } else {
        setText(introText + '\n' + subText.split('').map((char, index) => {
          return `<span style="animation-delay: ${index * delay}ms">${char}</span>`;
        }).slice(0, currentIndex - introText.length).join(''));
      }
      currentIndex++;
    }, delay);
    return () => clearInterval(currentInterval);
  }, [introText, subText, delay]);

  const handleClick = () => {
    console.log('Contact Me Clicked');
  }

  return (
    <div className="body__header__container">
        <div className="body__intro">
            <h1 className="body__intro__header" dangerouslySetInnerHTML={{ __html: text }}></h1>
            {/* <h3 className="body__intro__subtext"></h3> */}
            <button onClick={handleClick} className="body__intro__button">Contact Me</button>
        </div>
    </div>
  )
}

export default BodyHeader;
