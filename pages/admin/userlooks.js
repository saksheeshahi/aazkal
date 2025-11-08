import fs from "fs";
import path from "path";
import { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "userLooks.json");
  let userLooks = [];

  if (fs.existsSync(filePath)) {
    try {
      const content = fs.readFileSync(filePath, "utf8");
      userLooks = content.trim() ? JSON.parse(content) : [];
    } catch (err) {
      console.error("⚠️ Error loading userLooks.json:", err);
      userLooks = [];
    }
  }

  userLooks = userLooks
    .reverse()
    .map((look) => ({
      ...look,
      createdAtFormatted: look.createdAt
        ? new Date(look.createdAt).toLocaleString("en-IN", {
            dateStyle: "medium",
            timeStyle: "short",
          })
        : "Not specified",
    }));

  return {
    props: { userLooks },
    revalidate: 10,
  };
}

export default function AdminUserLooks({ userLooks }) {
  const [authorized, setAuthorized] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState("");

  // Simple local session cache
  useEffect(() => {
    const session = localStorage.getItem("aazkal_admin_session");
    if (session === "true") setAuthorized(true);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const expected = process.env.NEXT_PUBLIC_ADMIN_PASS || "aazkal123";
    if (enteredPassword === expected) {
      setAuthorized(true);
      localStorage.setItem("aazkal_admin_session", "true");
    } else {
      alert("❌ Incorrect password. Try again.");
    }
  };

  if (!authorized) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-[#FFF5F8] px-6">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-pink-100 text-center max-w-sm w-full">
          <h1 className="text-2xl font-bold text-aazbrown mb-4">
            🔒 Admin Access
          </h1>
          <p className="text-sm text-aazbrown/80 mb-6">
            Please enter your admin password to access user submissions.
          </p>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="Enter password"
              value={enteredPassword}
              onChange={(e) => setEnteredPassword(e.target.value)}
              className="border border-pink-200 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-pink-300 outline-none"
              required
            />
            <button
              type="submit"
              className="bg-aazpink text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-700 transition"
            >
              Enter Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ---- If Authenticated ----
  return (
    <>
      <Head>
        <title>AazKal | Admin - User Looks</title>
        <meta
          name="description"
          content="Admin dashboard to view all user-submitted looks and stories for AazKal."
        />
      </Head>

      <Header />

      <main className="max-w-6xl mx-auto p-6 mt-24 mb-16">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-aazbrown">
            🌸 AazKal Community Looks
          </h1>

          <button
            onClick={() => {
              localStorage.removeItem("aazkal_admin_session");
              setAuthorized(false);
            }}
            className="text-sm bg-pink-100 text-aazbrown px-4 py-2 rounded-full hover:bg-pink-200 transition"
          >
            Logout
          </button>
        </div>

        {userLooks.length === 0 ? (
          <p className="text-center text-gray-600">
            No user submissions yet. Once someone uploads a look, it’ll appear
            here.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {userLooks.map((look, index) => (
              <motion.div
                key={look.id || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-gradient-to-b from-[#FFF6F9] to-white border border-pink-100 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div className="relative w-full h-64 overflow-hidden">
                  {look.imageUrl ? (
                    <img
                      src={look.imageUrl}
                      alt={look.name || "User Look"}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                      No Image
                    </div>
                  )}

                  <span className="absolute top-3 left-3 bg-aazpink text-white text-xs px-3 py-1 rounded-full shadow">
                    #{index + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <h2 className="text-xl font-semibold text-aazbrown mb-1">
                      {look.name || "Anonymous"}
                    </h2>

                    {look.celebritySlug && (
                      <p className="text-xs text-gray-500 mb-1">
                        Inspired by:{" "}
                        <span className="font-medium text-aazpink">
                          {look.celebritySlug}
                        </span>
                      </p>
                    )}

                    <p className="text-sm text-aazbrown/80 leading-relaxed mb-3 line-clamp-4">
                      {look.story || "No story provided."}
                    </p>
                  </div>

                  <div className="border-t border-gray-200 mt-3 pt-2 text-xs text-gray-500 flex flex-col gap-1">
                    {look.email && <p>📧 {look.email}</p>}
                    {look.phone && <p>📱 {look.phone}</p>}
                    {look.whatsapp && <p>💬 WhatsApp: {look.whatsapp}</p>}
                    <p>🕓 {look.createdAtFormatted}</p>

                    {look.affiliateLink && (
                      <a
                        href={look.affiliateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-aazpink hover:underline mt-1"
                      >
                        🔗 View Affiliate Link
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
