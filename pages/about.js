import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutAazKal() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About AazKal",
    "url": "https://www.aazkal.com/about",
    "description":
      "AazKal is India’s first real-people fashion platform where women from every corner of the country recreate celebrity looks with authenticity and confidence. We celebrate individuality, storytelling, and style that empowers.",
    "publisher": {
      "@type": "Organization",
      "name": "AazKal",
      "url": "https://www.aazkal.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.aazkal.com/logo-bag.png"
      }
    },
    "mainEntity": {
      "@type": "Organization",
      "name": "AazKal",
      "founder": { "@type": "Person", "name": "Amit Shahi" },
      "sameAs": [
        "https://www.instagram.com/aazkal",
        "https://www.youtube.com/@aazkal",
        "https://www.pinterest.com/aazkal"
      ]
    }
  };

  return (
    <>
      <Head>
        <title>About AazKal | Real Looks. Real People. Real Style.</title>
        <meta
          name="description"
          content="AazKal is India’s first real-people fashion platform blending celebrity-inspired looks, storytelling, and empowerment. Discover the vision that makes AazKal more than just fashion."
        />
        <meta
          name="keywords"
          content="About AazKal, AazKal story, Indian fashion, real people fashion, celebrity-inspired looks, women empowerment, GenZ style platform"
        />

        {/* 🌸 Open Graph */}
        <meta property="og:title" content="About AazKal | Real Looks. Real People. Real Style." />
        <meta
          property="og:description"
          content="Learn how AazKal celebrates individuality through real-people recreations of celebrity looks — empowering stories, style, and authenticity."
        />
        <meta property="og:image" content="https://www.aazkal.com/og-about.jpg" />
        <meta property="og:url" content="https://www.aazkal.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="AazKal" />

        {/* 🌸 Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(aboutSchema),
          }}
        />
      </Head>

      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#FFF7FA] via-[#FFF1F5] to-white text-center py-24 px-6">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-aazbrown mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Our Story. Our Soul.
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto text-aazbrown/80 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          AazKal began with a simple belief — <strong>fashion should belong to everyone</strong>.
          Not just celebrities or influencers, but real people with real stories, dreams, and voices.
        </motion.p>
      </section>

      {/* Core Vision */}
      <section className="max-w-5xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.img
          src="/about-aazkal.png"
          alt="AazKal vision - real people real style"
          className="rounded-2xl shadow-xl w-full object-cover"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-aazbrown mb-4">
            Fashion with a Purpose ✨
          </h2>
          <p className="text-aazbrown/80 leading-relaxed mb-3">
            We don’t sell just clothes — we curate *confidence*.  
            AazKal lets you <strong>recreate celebrity looks</strong> with real products available online, 
            handpicked from trusted stores. From outfits to accessories, makeup to hair — we bring you the *entire look*, not just one piece of it.
          </p>
          <p className="text-aazbrown/80 leading-relaxed">
            Every featured look is an invitation to dream — powered by <strong>AI personalization</strong>, 
            community reels, and authentic creators from every corner of India.
          </p>
        </motion.div>
      </section>

      {/* Empowerment Philosophy */}
      <section className="bg-aazbeige py-20 px-6 text-center">
        <motion.h2
          className="text-3xl font-bold text-aazbrown mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Why We Exist 💫
        </motion.h2>
        <motion.p
          className="max-w-3xl mx-auto text-aazbrown/80 text-lg leading-relaxed mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          AazKal exists to <strong>celebrate women who lead the world in their own way</strong> — 
          by expressing, creating, and inspiring.  
          We spotlight *real creators* — college girls, homemakers, professionals, dreamers —  
          all reimagining celebrity looks through their own stories.
        </motion.p>
        <Link
          href="/create-your-look"
          className="inline-block bg-aazpink text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-700 shadow-md transition"
        >
          Start Your Look →
        </Link>
      </section>

      {/* Closing Note */}
      <section className="max-w-4xl mx-auto text-center py-16 px-6">
        <motion.p
          className="text-lg text-aazbrown/80 leading-relaxed mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Our journey is not about perfection — it’s about <strong>expression</strong>.  
          From Ghazipur to Goa, Jaipur to Jalandhar — AazKal represents every woman who dares to redefine fashion on her own terms.
        </motion.p>
        <motion.h3
          className="text-2xl font-semibold text-aazpink"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Together, we aren’t just following trends. We’re creating them.
        </motion.h3>
      </section>

      <Footer />
    </>
  );
}
