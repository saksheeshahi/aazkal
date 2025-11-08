import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="py-20 relative flex flex-col items-center justify-center text-center min-h-screen bg-gradient-to-b from-[#FFF9FA] via-[#FFF6F8] to-white overflow-hidden px-6 pt-28"
    >
      {/* Soft Gradient Highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,182,193,0.12),_transparent_70%)] pointer-events-none" />

      {/* Floating Aura */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,192,203,0.05),_transparent_70%)]"
      ></motion.div>

      {/* Logo */}
      <motion.img
        src="/logo-umbrella.png"
        alt="AazKal Logo"
        className="w-40 md:w-52 mb-8 drop-shadow-md z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />

      {/* Title */}
      <motion.h1
        className="text-5xl md:text-6xl font-serif font-bold text-aazbrown mb-6 leading-tight z-10"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        Real Looks. <br className="hidden sm:block" />
        <span className="text-aazpink">Real People.</span> Real Style.
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="max-w-2xl text-base md:text-lg text-aazbrown/80 mb-10 leading-relaxed z-10"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        Discover and recreate iconic celebrity looks that define modern India.
        AazKal blends inspiration and individuality — where fashion becomes
        expression.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center z-10"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <Link
          href="/create-your-look"
          className="bg-aazpink text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 shadow-lg transition-all duration-300"
        >
          ✨ Create Your Look
        </Link>

        <Link
          href="#celebrity-looks"
          className="border-2 border-aazpink text-aazpink px-8 py-3 rounded-full font-semibold hover:bg-aazpink hover:text-white transition-all duration-300"
        >
          👗 Explore Looks
        </Link>
      </motion.div>

      {/* Decorative Curve */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
