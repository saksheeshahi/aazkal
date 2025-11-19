import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | AazKal</title>
        <meta
          name="description"
          content="Learn how AazKal collects, uses, and protects your personal information. Your privacy and data dignity matter to us."
        />
        <link rel="canonical" href="https://aazkal.com/privacy-policy" />
      </Head>

      <Header />

      <main className="relative bg-gradient-to-b from-[#FFF7FA] via-[#FFF1F5] to-white py-24 px-6 overflow-hidden">

        {/* Glow effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,102,163,0.08),_transparent_55%)] pointer-events-none"></div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-aazbrown text-center mb-6 leading-tight">
          Privacy Policy
        </h1>

        <p className="text-lg text-aazbrown/90 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
          We respect your privacy. This page explains what information we collect,
          why we collect it, and how we keep it protected.
        </p>

        {/* Content Box */}
        <div className="bg-white border border-pink-100 rounded-2xl shadow-sm p-10 max-w-4xl mx-auto prose prose-pink text-aazbrown">

          <h2>Information We Collect</h2>
          <p>
            AazKal may collect:
          </p>
          <ul>
            <li>Your email address</li>
            <li>Optional phone number</li>
            <li>Images or content you upload</li>
            <li>Cookies and analytics data</li>
          </ul>

          <h2>How We Use Your Data</h2>
          <p>
            We use your information to:
          </p>
          <ul>
            <li>Display or feature your submissions</li>
            <li>Contact you about approvals or updates</li>
            <li>Improve website experience and user features</li>
            <li>Maintain platform safety and performance</li>
          </ul>

          <h2>Third Parties</h2>
          <p>
            We use secure third-party services such as hosting, analytics, and 
            content delivery. We do <strong>not</strong> sell your personal data.
            External services may collect anonymized analytics for performance
            insights.
          </p>

          <h2>Your Control</h2>
          <p>
            You may request data removal, corrections, or clarification at any time 
            by contacting us. Your privacy rights are important to us.
          </p>
        </div>

        {/* Note */}
        <p className="text-sm text-aazbrown/70 mt-10 italic text-center max-w-lg mx-auto">
          For any privacy-related questions, feel free to{" "}
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
