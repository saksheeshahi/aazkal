import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact AazKal | Real Looks. Real People. Real Style.</title>
        <meta
          name="description"
          content="We’d love to hear from you — connect with AazKal for collaborations, styling advice, or feedback. Let’s create something beautiful together."
        />
      </Head>

      <Header />

      <main className="relative bg-gradient-to-b from-[#FFF7FA] via-[#FFF1F5] to-white py-24 px-6 text-center overflow-hidden">
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,102,163,0.08),_transparent_50%)] pointer-events-none"></div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-aazbrown mb-6 leading-tight">
          Get in Touch 💌
        </h1>
        <p className="text-lg text-aazbrown/90 max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether it’s a <strong>styling question</strong>, a{" "}
          <strong>partnership idea</strong>, or heartfelt feedback about AazKal —
          we’d love to hear from you.  
          Together, let’s keep redefining what real style means.
        </p>

        {/* Contact Info */}
        <div className="bg-[#FFF5F8] border border-pink-100 rounded-2xl p-8 mb-12 shadow-sm max-w-lg mx-auto">
          <p className="text-aazbrown mb-3 text-base">
            📧 Email us at{" "}
            <a
              href="mailto:hello@aazkal.com"
              className="text-aazpink underline hover:text-pink-700 font-medium"
            >
              hello@aazkal.com
            </a>
          </p>
          <p className="text-aazbrown mb-1 text-base">
            📍 Based in India — connecting global hearts through fashion.
          </p>
          <p className="text-aazbrown/70 text-sm">
            Working hours: Monday to Friday, 10 AM – 6 PM IST
          </p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("💖 Thank you for reaching out! Our team will respond soon.");
          }}
          className="bg-white border border-pink-100 rounded-2xl shadow-sm p-8 max-w-lg mx-auto text-left space-y-5"
        >
          <div>
            <label className="block text-sm text-aazbrown font-medium mb-1">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="input w-full border border-pink-100 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FF66A3] outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-aazbrown font-medium mb-1">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="input w-full border border-pink-100 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FF66A3] outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-aazbrown font-medium mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              required
              placeholder="Write your message..."
              className="input w-full border border-pink-100 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FF66A3] outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full md:w-auto bg-aazpink text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 shadow-md transition"
          >
            Send Message
          </button>
        </form>

        {/* Privacy Note */}
        <p className="text-sm text-aazbrown/70 mt-10 italic max-w-lg mx-auto">
          AazKal respects your privacy and data dignity. We’ll only use your contact
          details to reply to your message. Read our{" "}
          <a
            href="/privacy-policy"
            className="underline text-aazpink hover:text-pink-700"
          >
            Privacy Policy
          </a>
          .
        </p>
      </main>

      <Footer />
    </>
  );
}
