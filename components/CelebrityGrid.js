"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import MediaEmbed from "../components/MediaEmbed"; // ✅ Unified media handler

export default function CelebrityGrid() {
  const [celebrities, setCelebrities] = useState([]);
  const [filter, setFilter] = useState("all");
  const [activeReel, setActiveReel] = useState(null);

  // ✅ Load local JSON data
  useEffect(() => {
    fetch("/data/celebrityPosts.json")
      .then((res) => res.json())
      .then((data) => setCelebrities(data))
      .catch((err) => console.error("Error loading celebrity data:", err));
  }, []);

  // ✅ Auto-scroll for Community Reels
  useEffect(() => {
    const scrollContainers = document.querySelectorAll(".auto-scroll");
    scrollContainers.forEach((container) => {
      let scrollAmount = container.scrollLeft;
      const scrollSpeed = 0.8;
      let isManual = false;
      let animationId;

      const step = () => {
        if (!isManual && container.dataset.paused !== "true") {
          scrollAmount += scrollSpeed;
          container.scrollLeft = scrollAmount;
          if (container.scrollLeft >= container.scrollWidth - container.clientWidth)
            scrollAmount = 0;
        }
        animationId = requestAnimationFrame(step);
      };
      animationId = requestAnimationFrame(step);

      const handleUserScroll = () => {
        isManual = true;
        clearTimeout(container._scrollTimeout);
        container._scrollTimeout = setTimeout(() => (isManual = false), 1500);
      };

      container.addEventListener("scroll", handleUserScroll);
      return () => {
        cancelAnimationFrame(animationId);
        container.removeEventListener("scroll", handleUserScroll);
      };
    });
  }, []);

  const categories = [
    { label: "All", value: "all" },
    { label: "Festive", value: "festive" },
    { label: "Western", value: "western" },
    { label: "Casual", value: "casual" },
    { label: "Party", value: "party" },
  ];

  const filteredCelebrities =
    filter === "all" ? celebrities : celebrities.filter((c) => c.category === filter);

  return (
    <section
      className="relative bg-gradient-to-b from-[#FFF7FA] via-[#FFF1F5] to-white py-24 px-6"
      id="celebrity-looks"
    >
      <h2 className="text-4xl font-bold text-center text-aazbrown mb-4">
        ✨ Explore Celebrity Looks
      </h2>
      <p className="text-center text-aazbrown/70 text-lg max-w-2xl mx-auto mb-12">
        Recreate real celebrity-inspired looks with real people — from red carpet to real life.
      </p>

      {/* ✅ Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-14">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setFilter(cat.value)}
            className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 border ${
              filter === cat.value
                ? "bg-aazpink text-white border-aazpink"
                : "bg-pink-50 text-aazbrown border-pink-200 hover:bg-aazpink hover:text-white"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* ✅ Celebrity Grid */}
      <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {filteredCelebrities.map((c, index) => (
          <motion.div
            key={c.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="min-h-[560px] flex flex-col justify-between rounded-2xl shadow-sm hover:shadow-xl overflow-hidden bg-gradient-to-b from-[#FFF7FA] to-[#FFFFFF] border border-pink-100 hover:-translate-y-2 transition-all duration-500 ease-out"
          >
            {/* ✅ IMAGE / REEL */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-xl">
              {c.instagramUrl ? (
                <MediaEmbed url={c.instagramUrl} />
              ) : c.heroImageUrl ? (
                <img
                  src={c.heroImageUrl}
                  alt={`${c.celebrityName} look`}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  fetchpriority="low"
                />
              ) : (
                <div className="w-full h-full shimmer" />
              )}
            </div>

            <div className="p-5 flex-grow flex flex-col gap-3">
              <Link
                href="/create-your-look"
                className="text-sm text-aazpink font-semibold hover:underline flex items-center gap-1"
              >
                ✨ Create Your Own Look
              </Link>

              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-2xl font-semibold text-aazbrown">
                  {c.celebrityName}
                </h3>
                {c.instagramUrl && (
                  <button
                    onClick={() => setActiveReel(c)}
                    className="text-aazbrown hover:text-aazpink text-sm font-medium flex items-center gap-1"
                  >
                    🎬 Watch the Look
                  </button>
                )}
              </div>

              {/* 📝 Description */}
              <p className="text-sm text-aazbrown/80 mb-2 leading-relaxed">
                {c.excerpt.length > 100 ? (
                  <>
                    {c.excerpt.slice(0, 100)}…
                    <Link
                      href={`/celebrity/${c.slug}`}
                      className="text-aazpink font-semibold hover:underline ml-1 whitespace-nowrap"
                    >
                      View Details →
                    </Link>
                  </>
                ) : (
                  c.excerpt
                )}
              </p>

              {/* 🛍️ Shop This Look */}
              <Link
                href={`/celebrity/${c.slug}#shop`}
                scroll={false}
                className="inline-flex items-center justify-center gap-2 w-full md:w-[240px] mx-auto px-6 py-3 rounded-full text-sm font-semibold bg-aazpink text-white shadow-lg hover:shadow-xl transform transition-all duration-200 hover:-translate-y-0.5"
              >
                <span className="text-lg">🛍️</span>
                <span>Shop This Look</span>
              </Link>

              {/* 🎥 Community Reels */}
              {c.promoReels && c.promoReels.length > 0 && (
                <div className="px-5 pb-6 mt-3 relative">
                  <h4 className="text-sm font-semibold text-aazbrown mb-4 flex items-center gap-2">
                    <span>🎥 Community Reels</span>
                    <span className="text-gray-400 text-xs font-normal">
                      (Inspired by {c.celebrityName})
                    </span>
                  </h4>

                  {/* Scroll Buttons */}
                  <button
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm shadow-md text-aazbrown hover:text-aazpink rounded-full w-8 h-8 flex items-center justify-center z-10"
                    onClick={(e) => {
                      const container = e.currentTarget.parentElement.querySelector(".auto-scroll");
                      container.scrollBy({ left: -150, behavior: "smooth" });
                    }}
                  >
                    ‹
                  </button>

                  <button
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm shadow-md text-aazbrown hover:text-aazpink rounded-full w-8 h-8 flex items-center justify-center z-10"
                    onClick={(e) => {
                      const container = e.currentTarget.parentElement.querySelector(".auto-scroll");
                      container.scrollBy({ left: 150, behavior: "smooth" });
                    }}
                  >
                    ›
                  </button>

                  {/* Circular Reels Carousel */}
                  <div
                    className="relative overflow-hidden group mx-10"
                    onMouseEnter={(e) => {
                      const scroller = e.currentTarget.querySelector(".auto-scroll");
                      if (scroller) scroller.dataset.paused = "true";
                    }}
                    onMouseLeave={(e) => {
                      const scroller = e.currentTarget.querySelector(".auto-scroll");
                      if (scroller) scroller.dataset.paused = "false";
                    }}
                  >
                    <motion.div
                      className="auto-scroll flex gap-6 overflow-x-auto scrollbar-hide py-2 justify-center"
                      style={{ scrollBehavior: "smooth" }}
                    >
                      {c.promoReels.map((reel, i) => {
                        const isYouTube =
                          reel.reelUrl.includes("youtube.com") || reel.reelUrl.includes("youtu.be");
                        return (
                          <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            onClick={() =>
                              setActiveReel({
                                ...c,
                                instagramUrl: reel.reelUrl,
                                isPromo: true,
                                promoCaption: reel.caption,
                                promoUsername: reel.username,
                              })
                            }
                            className="flex flex-col items-center gap-2 cursor-pointer"
                          >
                            {/* Circle Thumbnail */}
                            <div className="w-16 h-16 rounded-full border-2 border-transparent bg-gradient-to-tr from-pink-400 via-purple-400 to-orange-300 p-[2px] hover:scale-105 transition-transform duration-300">
                              <div className="w-full h-full bg-white rounded-full flex items-center justify-center shadow-sm">
                                {isYouTube ? (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6 text-red-600"
                                  >
                                    <path d="M19.6 3.2H4.4C2 3.2 0 5.2 0 7.6v8.8c0 2.4 2 4.4 4.4 4.4h15.2c2.4 0 4.4-2 4.4-4.4V7.6c0-2.4-2-4.4-4.4-4.4zM9.6 16.4V7.6L16.4 12l-6.8 4.4z" />
                                  </svg>
                                ) : (
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6">
                                    <defs>
                                      <linearGradient id="ig-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#f09433" />
                                        <stop offset="25%" stopColor="#e6683c" />
                                        <stop offset="50%" stopColor="#dc2743" />
                                        <stop offset="75%" stopColor="#cc2366" />
                                        <stop offset="100%" stopColor="#bc1888" />
                                      </linearGradient>
                                    </defs>
                                    <path
                                      d="M16.5 2h-9C5 2 3 4 3 7.5v9C3 19 5 21 7.5 21h9c2.5 0 4.5-2 4.5-4.5v-9C21 4 19 2 16.5 2z"
                                      fill="url(#ig-gradient)"
                                    />
                                  </svg>
                                )}
                              </div>
                            </div>

                            <span className="text-xs font-medium text-aazbrown hover:text-aazpink text-center w-16 truncate">
                              {reel.username.replace("@", "")}
                            </span>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* ✅ Modal */}
      <AnimatePresence>
        {activeReel && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="bg-white rounded-2xl p-5 max-w-lg w-full shadow-2xl relative overflow-y-auto max-h-[90vh]">
              <button
                onClick={() => setActiveReel(null)}
                className="absolute top-3 right-4 text-gray-600 hover:text-aazpink text-lg font-bold"
              >
                ✕
              </button>

              <h3 className="text-xl font-semibold text-aazbrown mb-3 text-center">
                {activeReel.isPromo
                  ? `${activeReel.promoUsername}'s Reel`
                  : `${activeReel.celebrityName}’s Official Look`}
              </h3>

              <div className="flex justify-center mb-4">
                <MediaEmbed url={activeReel.instagramUrl} />
              </div>

              <hr className="my-3 border-gray-200" />

              <p className="text-xs text-gray-500 italic text-center mb-3">
                {activeReel.instagramUrl.includes("youtube.com")
                  ? `Video by ${activeReel.promoUsername} — embedded from YouTube (public content).`
                  : `Reel by ${activeReel.promoUsername} — displayed under Instagram’s embed license.`}
              </p>

              {activeReel.promoCaption && (
                <p className="text-sm text-center text-aazbrown italic leading-relaxed">
                  “{activeReel.promoCaption}”
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
