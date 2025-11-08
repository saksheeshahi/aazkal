"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Header() {
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if user already logged in
    const session = localStorage.getItem("aazkal_admin_session");
    if (session === "true") setIsAdmin(true);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("aazkal_admin_session");
    setIsAdmin(false);
    router.push("/");
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/70 border-b border-pink-100 shadow-sm">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 py-3">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/logo-bag.png"
              alt="AazKal logo"
              className="w-12 h-12 logo-glow hover:scale-105 transition-transform duration-300"
            />
            <span className="text-2xl font-semibold text-aazbrown hover:text-aazpink transition-colors">
              AazKal
            </span>
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-aazbrown font-medium text-lg items-center">
          <li><Link href="/" className="hover:text-aazpink">Home</Link></li>
          <li><Link href="/#celebrity-looks" className="hover:text-aazpink">Celebrity Looks</Link></li>
          <li><Link href="/create-your-look" className="hover:text-aazpink">Create Your Look</Link></li>
          <li><Link href="/blog" className="hover:text-aazpink">Blog</Link></li>
          <li><Link href="/reels" className="hover:text-aazpink">Reels</Link></li>
          <li><Link href="/about" className="hover:text-aazpink">About</Link></li>
          <li><Link href="/contact" className="hover:text-aazpink">Contact</Link></li>

          {/* 🔒 Admin Access Section */}
          {isAdmin ? (
            <>
              <li>
                <Link
                  href="/admin/userlooks"
                  className="bg-aazpink text-white px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-pink-700 shadow transition"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="text-sm text-aazbrown underline hover:text-aazpink"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link
                href="/admin/userlooks"
                className="text-sm border border-pink-200 px-3 py-1.5 rounded-full hover:bg-aazpink hover:text-white transition"
              >
                Admin Login
              </Link>
            </li>
          )}
        </ul>
      </nav>

      {/* Animated Line Divider */}
      <div className="h-[2px] bg-gradient-to-r from-pink-400 via-pink-500 to-pink-400 animate-pulse"></div>
    </header>
  );
}
