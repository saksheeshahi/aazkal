"use client";

import InstagramEmbed from "./InstagramEmbed";
import YouTubeEmbed from "./YouTubeEmbed";

export default function MediaEmbed({ url }) {
  if (!url) return null;
  const lower = url.toLowerCase();

  if (lower.includes("youtube.com") || lower.includes("youtu.be")) {
    return <YouTubeEmbed url={url} />;
  }

  if (lower.includes("instagram.com")) {
    return <InstagramEmbed url={url} />;
  }

  return (
    <div className="text-center text-sm text-gray-500 italic p-3">
      Unsupported media type
    </div>
  );
}
