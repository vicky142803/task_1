import { useState } from 'react'

export default function Flashcard({ flashcard }) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div
      className="w-64 h-40 bg-white shadow-md rounded-lg cursor-pointer"
      onClick={handleFlip}
    >
      <div className="w-full h-full flex items-center justify-center p-4">
        {isFlipped ? (
          <p className="text-center">{flashcard.answer}</p>
        ) : (
          <p className="text-center">{flashcard.question}</p>
        )}
      </div>
    </div>
  )
}