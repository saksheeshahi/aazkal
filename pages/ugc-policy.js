import Header from "../components/Header";
import Footer from "../components/Footer";

export default function UGC() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto py-20 px-6">
        <h1 className="text-3xl font-bold mb-4">User Generated Content (UGC) Policy</h1>

        <section className="prose">
          <h2>What you can post</h2>
          <p>Original photos, videos, and stories you own or have permission to share. Do not post copyrighted material without permissions.</p>

          <h2>Celebrity images</h2>
          <p>Posting or embedding public social-media celebrity posts is commonly done, but using a celebrity's image for commercial promotion can carry rights-of-publicity risk. If you plan to use a celebrity image for commercial gain, obtain written permission or use official embeds when available.</p>

          <h2>Moderation & Removal</h2>
          <p>All submissions are reviewed and may be removed if they violate rules or laws.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
