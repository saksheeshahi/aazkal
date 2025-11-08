"use client";

import { useEffect, useRef } from "react";

export default function InstagramEmbed({ url }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!url || !containerRef.current) return;

    // ✅ Clear any existing embed
    containerRef.current.innerHTML = "";

    // ✅ Create blockquote element per Instagram spec
    const blockquote = document.createElement("blockquote");
    blockquote.className = "instagram-media";
    blockquote.setAttribute("data-instgrm-permalink", url);
    blockquote.setAttribute("data-instgrm-version", "14");
    blockquote.style.background = "#fff";
    blockquote.style.borderRadius = "10px";
    blockquote.style.margin = "0 auto";
    blockquote.style.maxWidth = "100%";

    containerRef.current.appendChild(blockquote);

    // ✅ Load or refresh Instagram embed script
    const scriptId = "instagram-embed-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      // If already loaded, refresh embeds
      window.instgrm?.Embeds?.process();
    }
  }, [url]);

  return (
    <div
      ref={containerRef}
      className="w-full flex justify-center items-center"
    >
      {/* Instagram embed iframe loads dynamically here */}
      <p className="text-sm text-gray-400 italic text-center">
        Loading Instagram reel...
      </p>
    </div>
  );
}
