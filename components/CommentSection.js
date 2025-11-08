"use client";
import { useState } from "react";
import axios from "axios";
import useSWR from "swr";
import { motion, AnimatePresence } from "framer-motion";

const fetcher = (url) => axios.get(url).then((r) => r.data);

export default function CommentSection({ celebritySlug }) {
  const { data: comments, mutate } = useSWR(
    `${process.env.NEXT_PUBLIC_API_BASE || ""}/lookcomments/${celebritySlug}`,
    fetcher
  );

  const [busy, setBusy] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Submit comment
  async function submit(e) {
    e.preventDefault();
    setBusy(true);
    const f = e.target;
    const fd = new FormData();
    fd.append("CelebritySlug", celebritySlug);
    fd.append("UserName", f.name.value);
    fd.append("Message", f.message.value);
    fd.append("Rating", rating);

    // 🆕 Multiple images support
    for (let file of f.images.files) {
      fd.append("Images", file);
    }

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_BASE || ""}/lookcomments`, fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      f.reset();
      setRating(0);
      mutate();
    } catch {
      alert("Failed to post");
    } finally {
      setBusy(false);
    }
  }

  const openLightbox = (imgs, index = 0) => {
    setLightboxImages(imgs);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImages([]);
    setCurrentIndex(0);
  };

  const nextImage = () => {
    setCurrentIndex((i) => (i + 1) % lightboxImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((i) =>
      i === 0 ? lightboxImages.length - 1 : i - 1
    );
  };

  return (
    <section className="mt-10 relative">
      <h3 className="text-2xl font-bold text-aazbrown mb-4">
        💬 Share Your Review & Photo
      </h3>

      {/* 📝 Review Form */}
      <form
        onSubmit={submit}
        className="bg-gradient-to-b from-[#FFF6F9] to-white border border-pink-100 rounded-2xl shadow-md p-6 space-y-4"
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            name="name"
            required
            placeholder="Your name"
            className="p-2 border border-pink-100 rounded-md focus:ring-2 focus:ring-aazpink outline-none"
          />
          <input
            type="file"
            name="images"
            multiple
            accept="image/*"
            className="text-sm text-gray-600"
          />
        </div>

        <textarea
          name="message"
          required
          placeholder="Your honest review..."
          rows={3}
          className="w-full p-2 border border-pink-100 rounded-md focus:ring-2 focus:ring-aazpink outline-none"
        />

        {/* ⭐ Rating Stars */}
        <div className="flex items-center gap-1 text-xl">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              type="button"
              key={n}
              onClick={() => setRating(n)}
              onMouseEnter={() => setHoverRating(n)}
              onMouseLeave={() => setHoverRating(0)}
              className={`transition-transform ${
                n <= (hoverRating || rating)
                  ? "text-[#FFD700] scale-110"
                  : "text-gray-300"
              } hover:scale-125`}
            >
              ★
            </button>
          ))}
          <span className="ml-2 text-sm text-gray-600">
            {rating ? `${rating}/5` : "Rate this look"}
          </span>
        </div>

        <button
          disabled={busy}
          className="bg-aazpink text-white font-semibold px-5 py-2 rounded-full hover:bg-pink-700 transition"
        >
          {busy ? "Posting..." : "Post Review"}
        </button>
      </form>

      {/* 💬 Display Comments */}
      <div className="mt-8 space-y-4">
        {!comments?.length && (
          <p className="text-gray-600 italic text-center">
            No comments yet — be the first to share your thoughts!
          </p>
        )}

        {comments?.map((c, index) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="border border-pink-100 bg-white/70 backdrop-blur-sm p-4 rounded-xl shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between">
              <strong className="text-aazbrown">{c.userName}</strong>
              <small className="text-xs text-gray-500">
                {new Date(c.createdAt).toLocaleString()}
              </small>
            </div>

            {c.rating && (
              <div className="text-[#FFD700] text-lg mt-1">
                {"★".repeat(c.rating)}{"☆".repeat(5 - c.rating)}
              </div>
            )}

            <p className="mt-2 text-aazbrown">{c.message}</p>

            {/* 🖼️ Multiple Thumbnails */}
            {c.imageUrls?.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-3">
                {c.imageUrls.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="user upload"
                    className="w-28 h-28 object-cover rounded-md shadow-md border border-pink-100 cursor-pointer hover:scale-105 transition-transform"
                    onClick={() => openLightbox(c.imageUrls, i)}
                  />
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* ⚖️ Legal Disclaimer */}
      <p className="mt-8 text-xs text-center text-gray-500 leading-relaxed max-w-xl mx-auto">
        Comments reflect individual opinions. AazKal promotes respectful
        discussion and fashion inspiration.
        <br />
        Report misuse or offensive content via{" "}
        <a href="/contact" className="underline text-aazpink">
          Contact
        </a>
        .
      </p>

      {/* 🖼️ Lightbox Gallery Modal */}
      <AnimatePresence>
        {lightboxImages.length > 0 && (
          <motion.div
            className="fixed inset-0 z-[1000] bg-black/80 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Main image */}
            <motion.img
              key={lightboxImages[currentIndex]}
              src={lightboxImages[currentIndex]}
              alt="enlarged"
              className="max-h-[85vh] max-w-[85vw] rounded-lg shadow-2xl border border-pink-100"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            />

            {/* Navigation */}
            {lightboxImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-8 text-white bg-white/20 hover:bg-white/40 rounded-full p-3 text-2xl font-bold"
                >
                  ‹
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-8 text-white bg-white/20 hover:bg-white/40 rounded-full p-3 text-2xl font-bold"
                >
                  ›
                </button>
              </>
            )}

            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 bg-white/20 hover:bg-white/40 text-white text-xl px-3 py-1 rounded-full"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
