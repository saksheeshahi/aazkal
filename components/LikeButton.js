import { useState, useEffect } from "react";

export default function LikeButton({ id, initial = 0 }) {
  const [likes, setLikes] = useState(initial);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    try {
      const key = `aazkal_like_${id}`;
      const v = localStorage.getItem(key);
      if (v === "1") setLiked(true);
    } catch (e) {}
  }, [id]);

  function toggle() {
    const next = liked ? likes - 1 : likes + 1;
    setLiked(!liked);
    setLikes(next);
    try { localStorage.setItem(`aazkal_like_${id}`, !liked ? "1" : "0"); } catch (e) {}
  }

  return (
    <button onClick={toggle} className="inline-flex items-center gap-2 bg-white border px-3 py-1 rounded-full shadow-sm hover:shadow-md">
      <svg xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 ${liked ? 'text-pink-600' : 'text-gray-400'}`} viewBox="0 0 20 20" fill="currentColor">
        <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 18.657 3.172 11.83a4 4 0 010-5.657z"/>
      </svg>
      <span className="text-sm font-medium">{likes}</span>
    </button>
  );
}
