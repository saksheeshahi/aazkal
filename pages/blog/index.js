import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import blogPosts from "../../data/blogPosts.json";

export default function BlogPage() {
  const [filter, setFilter] = useState("all");
  const categories = ["all", "AI", "Celebrity", "Style", "Community"];

  const filteredPosts =
    filter === "all"
      ? blogPosts
      : blogPosts.filter((p) =>
          p.category.toLowerCase().includes(filter.toLowerCase())
        );

  return (
    <>
      <Head>
        <title>AazKal Blog | Real Looks, AI Fashion & Style Stories</title>
        <meta
          name="description"
          content="Dive into AazKal Blog — where AI meets Indian fashion, creators share real stories, and style becomes personal. Read the latest celebrity, AI, and trend insights."
        />
        <meta property="og:image" content="/logo-bag.png" />
      </Head>

      <Header />

      <main className="pt-28 pb-20 bg-gradient-to-b from-[#FFF5F8] via-[#FFF1F5] to-white min-h-screen">
        {/* ✨ Hero Section */}
        <section className="text-center px-6 mb-16">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-aazbrown mb-4 leading-tight"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            AazKal Journal 💫
          </motion.h1>
          <motion.p
            className="text-lg text-aazbrown/80 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Discover inspiring fashion stories, AI-driven insights, and creator-led movements redefining modern Indian style.
          </motion.p>
        </section>

        {/* ✨ Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 border ${
                filter === cat
                  ? "bg-aazpink text-white border-aazpink"
                  : "bg-pink-50 text-aazbrown border-pink-200 hover:bg-aazpink hover:text-white"
              }`}
            >
              {cat === "all" ? "All Posts" : cat}
            </button>
          ))}
        </div>

        {/* ✨ Blog Cards Section */}
        <section className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredPosts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#FFF6F9] to-white border border-pink-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Blog Image */}
              <div className="overflow-hidden relative">
                <img
                  src={post.image || "/placeholder.jpg"}
                  alt={post.title}
                  className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <span className="absolute bottom-2 left-2 bg-aazpink/80 text-white text-xs px-3 py-1 rounded-full shadow-md">
                  {post.category}
                </span>
              </div>

              {/* Blog Info */}
              <div className="p-5 text-left">
                <h2 className="text-xl font-semibold text-aazbrown mb-2 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-sm text-aazbrown/80 mb-3 leading-relaxed line-clamp-3">
                  {post.excerpt.slice(0, 120)}...
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{post.date}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-aazpink font-medium hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        {/* ✨ Empty State */}
        {filteredPosts.length === 0 && (
          <p className="text-center text-gray-500 mt-16 italic">
            No articles found for <strong>{filter}</strong> — check back soon!
          </p>
        )}
      </main>

      <Footer />
    </>
  );
}
