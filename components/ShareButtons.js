export function ShareButtons({ url, title }) {
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  return (
    <div className="flex gap-2">
      <a href={`https://wa.me/?text=${encodeURIComponent(title + ' ' + shareUrl)}`} target="_blank" rel="noopener noreferrer" className="px-3 py-1 rounded bg-green-500 text-white text-xs">WhatsApp</a>
      <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="px-3 py-1 rounded bg-blue-400 text-white text-xs">X</a>
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="px-3 py-1 rounded bg-blue-600 text-white text-xs">Facebook</a>
    </div>
  );
}
