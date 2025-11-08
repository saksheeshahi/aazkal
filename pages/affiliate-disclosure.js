import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Affiliate() {
  return (
    <>
      <Header />

      <main className="bg-gradient-to-b from-[#FFF7FA] via-[#FFF1F5] to-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-aazbrown mb-6">
          Affiliate Disclosure 🌸
        </h1>

        <div className="max-w-3xl mx-auto text-aazbrown/90 leading-relaxed text-lg">
          <p className="mb-6">
            At <strong>AazKal</strong>, our mission is to empower women and creators through
            authentic storytelling and accessible fashion. To help sustain our
            platform, some of our product recommendations and “Shop This Look” links
            may include <strong>affiliate partnerships</strong>.
          </p>

          <p className="mb-6">
            This means if you choose to make a purchase through these links, we may
            earn a small commission — <em>at no additional cost to you</em>.
            Every product featured on AazKal is curated with care, and we only
            highlight items we genuinely believe reflect our vision of real, confident style.
          </p>

          <p className="italic text-aazbrown/80">
            Transparency is part of our fashion philosophy — because trust is always in trend.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
