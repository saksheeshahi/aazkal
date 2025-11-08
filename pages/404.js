// pages/404.js
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center text-center py-24">
        <h1 className="text-6xl font-bold text-aazpink mb-4">404</h1>
        <p className="text-lg text-aazbrown mb-6">Oops! The page you’re looking for doesn’t exist.</p>
        <Link href="/" className="bg-aazpink text-white px-6 py-3 rounded-full hover:bg-pink-700 transition">
          Go Back Home
        </Link>
      </main>
      <Footer />
    </>
  );
}
