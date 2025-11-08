import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import CelebrityGrid from "../components/CelebrityGrid";
import TrustTransparency from "../components/TrustTransparency";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>AazKal | Real Looks. Real People. Real Style.</title>
        <meta
          name="description"
          content="Discover and recreate celebrity-inspired fashion looks. AazKal blends inspiration, shopping, and self-expression for everyone."
        />
      </Head>

      <Header />
      <Hero />
      <section className="section-bg">
      <CelebrityGrid />
      </section>      
      <TrustTransparency />
      <Footer />
    </>
  );
}