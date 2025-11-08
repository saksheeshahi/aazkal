"use client";

export default function YouTubeEmbed({ url }) {
  if (!url) return null;

  // Extract video ID from all common YouTube link formats
  const videoId = (() => {
    try {
      const yt = new URL(url);
      if (yt.hostname.includes("youtu.be")) return yt.pathname.slice(1);
      if (yt.searchParams.get("v")) return yt.searchParams.get("v");
      if (yt.pathname.includes("/shorts/")) return yt.pathname.split("/shorts/")[1].split("?")[0];
    } catch (e) {
      return null;
    }
  })();

  if (!videoId) {
    return (
      <div className="text-center text-sm text-gray-500 italic p-3">
        Invalid YouTube link
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden rounded-xl shadow-md">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-64 sm:h-80"
      ></iframe>
    </div>
  );
}
