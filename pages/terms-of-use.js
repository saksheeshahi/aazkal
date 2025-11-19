import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Use | AazKal</title>
        <meta
          name="description"
          content="Read AazKal’s Terms of Use, including content rights, affiliate practices, and our moderation policy."
        />
        <link rel="canonical" href="https://aazkal.com/terms-of-use" />
      </Head>

      <Header />

      {/* MAIN SECTION */}
      <main className="relative bg-gradient-to-b from-[#FFF7FA] via-[#FFF1F5] to-white py-24 px-6 overflow-hidden">
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,102,163,0.08),_transparent_55%)] pointer-events-none"></div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-aazbrown text-center mb-6 leading-tight">
          Terms of Use
        </h1>

        <p className="text-lg text-aazbrown/90 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
          Please read these terms carefully before using AazKal. By accessing or using
          our platform, you agree to follow these Terms of Use and our policies.
        </p>

        {/* Content Box */}
        <div className="bg-white border border-pink-100 rounded-2xl shadow-sm p-10 max-w-4xl mx-auto prose prose-pink text-aazbrown">

          <h2>User Content</h2>
          <p>
            Users may post images, stories, and other content on AazKal. By posting,
            you confirm that you own the rights to your content or have explicit
            permission from the rightful owner. You grant AazKal permission to display,
            share, feature, or promote the content on the platform.
          </p>

          <h2>Affiliate Links</h2>
          <p>
            AazKal may include affiliate links when recommending outfits, fashion
            pieces, or accessories. We may earn a small commission from qualifying
            purchases, at no extra cost to you. AazKal is not responsible for any
            third-party website policies, delivery issues, or product problems.
          </p>

          <h2>Content Moderation</h2>
          <p>
            To maintain a safe and respectful community, AazKal reviews user-submitted
            content. We reserve the right to remove posts that violate legal, ethical,
            or community guidelines, including copyrighted materials, misleading
            information, or inappropriate imagery.
          </p>

          <h2>Platform Usage</h2>
          <p>
            By accessing AazKal, you agree not to misuse the platform, copy content
            without permission, scrape data, or attempt actions that harm the platform
            or users.
          </p>

        </div>

        {/* Note */}
        <p className="text-sm text-aazbrown/70 mt-10 italic text-center max-w-lg mx-auto">
          If you have questions regarding these terms, feel free to{" "}
          <a
            href="/contact"
            className="underline text-aazpink hover:text-pink-700"
          >
            contact our team
          </a>.
        </p>

      </main>

      <Footer />
    </>
  );
}
