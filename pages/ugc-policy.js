import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function UGC() {
  return (
    <>
      <Head>
        <title>User Generated Content (UGC) Policy | AazKal</title>
        <meta
          name="description"
          content="Guidelines for sharing original photos, reels, and fashion stories on AazKal while respecting copyright and publicity rights."
        />
        <link rel="canonical" href="https://aazkal.com/ugc-policy" />

        {/* OpenGraph */}
        <meta
          property="og:title"
          content="User Generated Content (UGC) Policy | AazKal"
        />
        <meta
          property="og:description"
          content="Understand what you can post, moderation rules, and celebrity image usage under AazKal’s UGC policy."
        />
        <meta property="og:image" content="/logo-bag.png" />
      </Head>

      <Header />

      <main className="relative bg-gradient-to-b from-[#FFF7FA] via-[#FFF1F5] to-white py-24 px-6 overflow-hidden">

        {/* Glow effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,102,163,0.08),_transparent_55%)] pointer-events-none"></div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-aazbrown text-center mb-6 leading-tight">
          UGC Policy
        </h1>

        <p className="text-lg text-aazbrown/90 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
          This policy explains how User Generated Content (UGC) works on AazKal,
          including posting rules, rights, and fair-use guidelines for celebrity 
          and fashion inspiration content.
        </p>

        {/* Content Box */}
        <div className="bg-white border border-pink-100 rounded-2xl shadow-sm p-10 max-w-4xl mx-auto prose prose-pink text-aazbrown">

          <h2>What You Can Post</h2>
          <p>
            You may submit:
          </p>
          <ul>
            <li>Your own photos, reels, and styling images</li>
            <li>Before/after looks or transformations</li>
            <li>Fashion inspiration and outfit breakdowns</li>
          </ul>
          <p>
            By submitting, you confirm that the content is yours or you have
            permission from the original creator.
          </p>

          <h2>Celebrity Images & Fair Use</h2>
          <p>
            AazKal allows sharing celebrity looks only as{" "}
            <strong>fashion inspiration, commentary, and transformative use</strong>.
            This falls under fair use when:
          </p>
          <ul>
            <li>Content is not used for commercial resale</li>
            <li>Credit/tagging is provided when possible</li>
            <li>Images are significantly transformed or analyzed</li>
            <li>The purpose is educational, stylistic, or commentary-based</li>
          </ul>

          <h2>Our Rights</h2>
          <p>
            By submitting UGC, you grant AazKal permission to:
          </p>
          <ul>
            <li>Display your content on the website</li>
            <li>Show it in reels, collections, or lookbooks</li>
            <li>Use it for promotional showcases (non-commercial)</li>
          </ul>
          <p>
            You retain full ownership of your content at all times.
          </p>

          <h2>Content Moderation</h2>
          <p>
            AazKal reviews all submissions. We may remove content that:
          </p>
          <ul>
            <li>Violates copyright or privacy</li>
            <li>Uses stolen or uncredited media</li>
            <li>Contains inappropriate or harmful material</li>
            <li>Misrepresents a celebrity, brand, or user</li>
          </ul>

          <h2>Do Not Upload</h2>
          <ul>
            <li>Images you do not own or have rights to</li>
            <li>Paid or premium photos/screenshots</li>
            <li>Content violating someone’s privacy (unblurred strangers etc.)</li>
          </ul>

          <h2>Withdraw or Edit Your Content</h2>
          <p>
            You may request removal, edits, or corrections of your content at any 
            time by contacting our team.
          </p>
        </div>

        {/* Note */}
        <p className="text-sm text-aazbrown/70 mt-10 italic text-center max-w-lg mx-auto">
          For UGC-related questions, please{" "}
          <a
            href="/contact"
            className="underline text-aazpink hover:text-pink-700"
          >
            reach out to us
          </a>.
        </p>

      </main>

      <Footer />
    </>
  );
}
