import { motion } from "framer-motion";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";

export default function Reels() {
  return (
    <Layout>
      <SEO
        title="AazKal Fashion Reels"
        description="Explore short video reels recreating celebrity and real-hero looks on AazKal — where style meets motion and individuality."
      />

      <section className="relative bg-gradient-to-b from-[#FFF7FA] via-[#FFF1F5] to-white py-24 px-6 text-center overflow-hidden">
        {/* Ambient background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,102,163,0.06),_transparent_60%)] pointer-events-none"></div>

        {/* Hero Heading */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-aazbrown mb-6"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          AazKal Fashion Reels 🎥
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="max-w-2xl mx-auto text-lg text-aazbrown/90 mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Discover, share, and celebrate <strong>real recreations</strong> of
          celebrity looks — all in motion.  
          From red-carpet glam to casual chic, AazKal Reels is your stage to shine.
        </motion.p>

        {/* Coming Soon Notice */}
        <motion.div
          className="inline-flex flex-col items-center justify-center bg-[#FFF5F8] border border-pink-100 rounded-2xl p-10 shadow-sm text-center max-w-md mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="text-5xl mb-4 animate-bounce">✨</div>
          <h2 className="text-2xl font-semibold text-aazbrown mb-2">
            Coming Soon
          </h2>
          <p className="text-aazbrown/80 mb-4 leading-relaxed">
            We’re building something special — a creative space for
            <strong> fashion lovers</strong>, <strong>stylists</strong>, and{" "}
            <strong>everyday icons</strong> to express themselves through short reels.
          </p>
          <span className="text-aazpink font-medium">
            Stay tuned for the launch on AazKal 🌸
          </span>
        </motion.div>

        {/* Footer Line */}
        <motion.p
          className="text-sm text-aazbrown/70 mt-12 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Real people. Real motion. Real style.
        </motion.p>
      </section>
    </Layout>
  );
}
