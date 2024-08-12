import React, { useState } from "react";
import "../app/FlashCard.css"; 

const FlashCard = ({ question, answer }: { question: string, answer: string}) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`relative w-80 h-48 bg-white text-black rounded-lg shadow-lg cursor-pointer transform-style-3d transition-transform duration-500 ${flipped ? 'rotate-y-180' : ''
        }`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="absolute inset-0 p-4 flex items-center justify-center backface-hidden">
        <span className="text-xl text-center font-bold">{question}</span>
      </div>
      <div className="absolute inset-0 p-4 flex items-center justify-center backface-hidden rotate-y-180 bg-blue-500 text-white rounded-lg">
        <span className="text-xl">{answer}</span>
      </div>
    </div>
  );
};

export default FlashCard;
