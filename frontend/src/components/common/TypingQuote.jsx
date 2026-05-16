import React, { useState, useEffect } from "react";
import "../../css/typingQuote.css";

const quotes = [
  "Write slowly. The world is already loud.",

  "Stories are how we remember who we are.",
  "Let your words breathe before they speak.",
  
  "Write what trembles inside you.",
  "Every sentence is a quiet rebellion.",
  "The softest voice often carries the deepest truth."
];

const TypingQuote = () => {
  const [text, setText] = useState("");
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentQuote = quotes[quoteIndex];

    if (charIndex < currentQuote.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + currentQuote[charIndex]);
        setCharIndex(prev => prev + 1);
      }, 100); // typing speed (increase to slow more)

      return () => clearTimeout(timeout);
    } else {
      // Pause before next quote
      const pause = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setQuoteIndex((prev) => (prev + 1) % quotes.length);
      }, 3500);

      return () => clearTimeout(pause);
    }

  }, [charIndex, quoteIndex]);

  return (
    <div className="typing-container">
      <p className="typing-text">
        {text}
        <span className="cursor">|</span>
      </p>
    </div>
  );
};

export default TypingQuote;
