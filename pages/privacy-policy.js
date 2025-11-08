import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Privacy() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto py-20 px-6">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-3">We respect your privacy. This page explains how we collect and use personal data.</p>

        <section className="mt-6 prose">
          <h2>Information We Collect</h2>
          <p>Email, optional phone, images you upload, cookies and analytics.</p>

          <h2>How We Use Data</h2>
          <p>To display your submissions, email about approvals, and to improve our services.</p>

          <h2>Third Parties</h2>
          <p>We use analytics/hosting providers. We will not sell your personal data.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
