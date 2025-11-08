import { useState } from "react";

export default function RatingStars({ id, value = 0, onChange }) {
  const [rating, setRating] = useState(value);
  function set(r) {
    setRating(r);
    if (onChange) onChange(r);
  }
  return (
    <div className="flex items-center gap-1" role="radiogroup" aria-label="Rating">
      {[1,2,3,4,5].map((n) => (
        <button
          key={n}
          onClick={() => set(n)}
          className={`text-lg ${n <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
          aria-checked={n === rating}
          role="radio"
          aria-label={`${n} star`}>
          ★
        </button>
      ))}
    </div>
  );
}
