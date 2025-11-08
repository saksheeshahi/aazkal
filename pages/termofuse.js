import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Terms() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto py-20 px-6">
        <h1 className="text-3xl font-bold mb-4">Terms of Use</h1>
        <p className="mb-3">Welcome to AazKal. Please read these terms carefully before using our site. By accessing or using AazKal, you agree to be bound by these Terms.</p>

        <section className="mt-6 prose">
          <h2>User Content</h2>
          <p>Users may post images and stories. By posting you confirm you own the rights or have permission to post.</p>

          <h2>Affiliate Links</h2>
          <p>AazKal may use affiliate links. We disclaim liability for third-party merchant policies.</p>

          <h2>Content Moderation</h2>
          <p>We review all submissions and may remove content that violates community or legal rules.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
