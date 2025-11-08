import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function CreateYourLook() {
  const router = useRouter();
  const inspired = router.query.inspired || "";
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMsg("");
    const f = e.target;
    const fd = new FormData();

    fd.append("CelebritySlug", f.celebritySlug.value || inspired);
    fd.append("Name", f.name.value);
    fd.append("Email", f.email.value);
    fd.append("Phone", f.phone.value);
    fd.append("Story", f.story.value);
    if (f.image.files[0]) fd.append("Image", f.image.files[0]);
    fd.append("AffiliateLink", f.affiliate.value);
    fd.append("WhatsApp", f.whatsapp.value);
    fd.append("ConsentGiven", f.consent.checked ? "true" : "false");
    fd.append("IsOriginalLook", f.isOriginal.checked ? "true" : "false");

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_BASE}/userlooks`, fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMsg("✅ Thank you! Your look was submitted for review. We’ll email you after approval.");
      f.reset();
    } catch (err) {
      console.error(err);
      setMsg("❌ Oops! Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Header />

      <main className="bg-gradient-to-b from-[#FFF7FA] via-[#FFF1F5] to-white min-h-screen pt-28 pb-16 px-6">
        {/* Hero Section */}
        <section className="text-center mb-10">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-aazbrown mb-4"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            ✨ Create Your Own Look
          </motion.h1>
          <motion.p
            className="text-lg text-aazbrown/80 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Upload your recreation of a celebrity look — or your own!  
            Celebrate your style, your story, and your confidence. 🌸
          </motion.p>
        </section>

        {/* Form Section */}
        <motion.form
          onSubmit={onSubmit}
          className="max-w-2xl mx-auto bg-white/70 border border-pink-100 rounded-2xl shadow-sm p-8 backdrop-blur-sm space-y-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <label className="block text-sm text-aazbrown font-medium mb-1">
              Inspired by (slug)
            </label>
            <input
              name="celebritySlug"
              defaultValue={inspired}
              placeholder="e.g. deepika-padukone-paris-look"
              className="input"
            />
          </div>

          <div>
            <label className="block text-sm text-aazbrown font-medium mb-1">
              Name*
            </label>
            <input
              name="name"
              required
              placeholder="Enter your full name"
              className="input"
            />
          </div>

          <div>
            <label className="block text-sm text-aazbrown font-medium mb-1">
              Email*
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="your@email.com"
              className="input"
            />
          </div>

          <div>
            <label className="block text-sm text-aazbrown font-medium mb-1">
              Phone (optional)
            </label>
            <input
              name="phone"
              placeholder="+91 XXXXX XXXXX"
              className="input"
            />
          </div>

          <div>
            <label className="block text-sm text-aazbrown font-medium mb-1">
              Your Story*
            </label>
            <textarea
              name="story"
              required
              rows={4}
              placeholder="Share your story, inspiration, or message..."
              className="input"
            />
          </div>

          <div>
            <label className="block text-sm text-aazbrown font-medium mb-1">
              Upload Image (required)
            </label>
            <input
              name="image"
              type="file"
              accept="image/*"
              required
              className="block w-full text-sm text-aazbrown file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-aazpink file:text-white hover:file:bg-pink-700"
            />
          </div>

          <div>
            <label className="block text-sm text-aazbrown font-medium mb-1">
              Affiliate / Product Link (optional)
            </label>
            <input
              name="affiliate"
              placeholder="Paste link from Myntra, Ajio, or other store"
              className="input"
            />
          </div>

          <div>
            <label className="block text-sm text-aazbrown font-medium mb-1">
              WhatsApp / Contact (optional)
            </label>
            <input
              name="whatsapp"
              placeholder="For collab or verification purposes"
              className="input"
            />
          </div>

          <div className="flex flex-col gap-3 mt-4">
            <label className="flex gap-2 items-start text-sm text-aazbrown/80">
              <input type="checkbox" name="consent" required className="mt-1" />
              <span>
                I confirm I own this photo or have permission to share it on
                AazKal and accept the{" "}
                <a
                  className="underline text-aazpink"
                  href="/ugc-policy"
                  target="_blank"
                >
                  UGC Policy
                </a>
                .
              </span>
            </label>

            <label className="flex gap-2 items-start text-sm text-aazbrown/80">
              <input type="checkbox" name="isOriginal" className="mt-1" />
              <span>This is my original/boutique look.</span>
            </label>
          </div>

          <button
            disabled={loading}
            className={`w-full rounded-full py-3 font-semibold text-white transition-all ${
              loading
                ? "bg-pink-300 cursor-wait"
                : "bg-aazpink hover:bg-pink-700 shadow-md"
            }`}
          >
            {loading ? "Submitting..." : "Submit Your Look"}
          </button>
        </motion.form>

        {msg && (
          <motion.p
            className={`mt-6 text-center font-medium ${
              msg.includes("✅")
                ? "text-green-600"
                : "text-red-600"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {msg}
          </motion.p>
        )}

        <p className="mt-10 text-center italic text-aazbrown/70">
          “Real confidence is wearing your story — and you just inspired someone today.” 🌸
        </p>
      </main>

      <Footer />
    </>
  );
}
