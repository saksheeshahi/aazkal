// Add this below <CelebrityGrid /> inside index.js

import Link from "next/link";

function TrustTransparency() {
  return (
    <section className="bg-[#FFF5F8] py-16 px-6 text-center border-t border-pink-100 mt-12">
      <h2 className="text-3xl font-bold text-aazbrown mb-4">
        Trust. Respect. Transparency. 🌸
      </h2>

      <p className="text-lg text-aazbrown/90 max-w-3xl mx-auto mb-6 leading-relaxed">
        At <strong>AazKal</strong>, we believe in celebrating fashion with integrity.
        Every image, style, and story shared here follows our core values of 
        <strong> consent</strong>, <strong>authenticity</strong>, and <strong>respect</strong>.
        No celebrity is affiliated with AazKal — all looks are shared under fair-use inspiration.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
        <Link
          href="/ugc-policy"
          className="text-aazpink underline hover:text-pink-700"
        >
          View UGC Policy
        </Link>
        <span className="hidden sm:block text-aazbrown">|</span>
        <Link
          href="/privacy-policy"
          className="text-aazpink underline hover:text-pink-700"
        >
          Privacy Policy
        </Link>
        <span className="hidden sm:block text-aazbrown">|</span>
        <Link
          href="/affiliate-disclosure"
          className="text-aazpink underline hover:text-pink-700"
        >
          Affiliate Disclosure
        </Link>
      </div>

      <p className="mt-8 text-sm text-aazbrown/80 italic">
        Empowering individuality while staying ethical in every frame.  
        Because fashion should always be as <strong>real</strong> as the people who wear it.
      </p>
    </section>
  );
}

export default TrustTransparency;
