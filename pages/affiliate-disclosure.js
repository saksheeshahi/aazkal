import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Affiliate() {
  return (
    <>
      <Head>
        <title>Affiliate Disclosure | AazKal</title>
        <meta
          name="description"
          content="AazKal participates in affiliate programs to support the platform. Learn how affiliate links work and how we maintain transparency."
        />
        <link rel="canonical" href="https://aazkal.com/affiliate-disclosure" />
      </Head>

      <Header />

      <main className="relative bg-gradient-to-b from-[#FFF7FA] via-[#FFF1F5] to-white py-24 px-6 overflow-hidden text-center">

        {/* Glow effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,102,163,0.08),_transparent_55%)] pointer-events-none"></div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-aazbrown mb-6 leading-tight">
          Affiliate Disclosure 🌸
        </h1>

        <p className="text-lg text-aazbrown/90 max-w-2xl mx-auto mb-12 leading-relaxed">
          Transparency is part of our fashion philosophy — because trust is always in trend.
        </p>

        {/* Content Box */}
        <div className="bg-white border border-pink-100 rounded-2xl shadow-sm p-10 max-w-4xl mx-auto prose prose-pink text-aazbrown">

          <h2>Why We Use Affiliate Links</h2>
          <p>
            At <strong>AazKal</strong>, our mission is to empower women and creators
            through authentic storytelling and accessible fashion. To help sustain
            the platform, some “Shop This Look” and product recommendations may
            include affiliate partnerships.
          </p>

          <h2>How Affiliate Links Work</h2>
          <p>
            If you choose to purchase a product through an affiliate link on AazKal,
            we may earn a small commission — <em>at no extra cost to you.</em>
          </p>
          <p>
            These earnings help us:
          </p>
          <ul>
            <li>Create more look breakdowns</li>
            <li>Support creators and stylists</li>
            <li>Improve our platform experience</li>
          </ul>

          <h2>Our Promise to You</h2>
          <p>
            We only recommend items we truly believe reflect AazKal’s vision of
            real, confident, expressive style. No brand, influencer, or retailer
            can pay to alter our editorial integrity.
          </p>

          <h2>Full Transparency</h2>
          <p>
            We value your trust. Whenever an affiliate link is used, it is disclosed 
            clearly. AazKal does not collect extra fees, hidden charges, or personal 
            payment data from affiliate purchases.
          </p>

        </div>

        {/* Footer Note */}
        <p className="text-sm text-aazbrown/70 mt-10 italic max-w-lg mx-auto">
          Have questions about our affiliate practices?{" "}
          <a
            href="/contact"
            className="underline text-aazpink hover:text-pink-700"
          >
            Contact our team anytime.
          </a>
        </p>

      </main>

      <Footer />
    </>
  );
}
