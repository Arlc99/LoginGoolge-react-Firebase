import React, { useState, useEffect, useRef } from 'react';
import './TypewriterEffect.css';

const TypewriterEffect = ({ lines, speed = 100, cursorColor = '#b7e998', underlineColor = 'linear-gradient(90deg, #0b880f, #96e466)' }) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [showUnderline, setShowUnderline] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    let typingInterval;
    let cursorInterval;
    let underlineTimeout;
    let lineTimeout;

    if (lines.length > 0) {
      const currentLine = lines[currentLineIndex];
      let charIndex = 0;

      // Efecto de escritura
      typingInterval = setInterval(() => {
        if (charIndex <= currentLine.length) {
          setDisplayText(currentLine.substring(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typingInterval);
          
          // Mostrar subrayado
          setShowUnderline(true);
          underlineTimeout = setTimeout(() => {
            setShowUnderline(false);
            
            // Cambiar a la siguiente línea después de un breve retraso
            lineTimeout = setTimeout(() => {
              setDisplayText('');
              setCurrentLineIndex((prevIndex) => 
                prevIndex === lines.length - 1 ? 0 : prevIndex + 1
              );
            }, 500);
          }, 2000);
        }
      }, speed);

      // Efecto de cursor parpadeante
      cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 500);
    }

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
      clearTimeout(underlineTimeout);
      clearTimeout(lineTimeout);
    };
  }, [currentLineIndex, lines, speed]);

  return (
    <div className="typewriter-container" ref={containerRef}>
      <div className="typing-line">
        {displayText}
        <span 
          className="cursor" 
          style={{ 
            opacity: showCursor ? 1 : 0,
            borderRightColor: cursorColor
          }}
        >
          |
        </span>
        {showUnderline && (
          <div 
            className="underline" 
            style={{ background: underlineColor }}
          />
        )}
      </div>
    </div>
  );
};

export default TypewriterEffect; 