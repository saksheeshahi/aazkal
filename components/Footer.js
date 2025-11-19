export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-aazbrown text-white text-center py-10 px-6 relative overflow-hidden">
      {/* Soft glow / texture background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_70%)] pointer-events-none"></div>

      {/* Brand Vision */}
      <p className="relative z-10 mb-3 text-base md:text-lg font-medium opacity-95">
        🌸 Empowering every individual to express their <span className="text-aazpink">real style</span>.
      </p>

      {/* Navigation Links */}
      <nav className="relative z-10 flex flex-wrap justify-center gap-3 text-sm mt-4">
        <a href="/terms-of-use" className="underline underline-offset-2 hover:text-pink-200 transition">
          Terms of Use
        </a>
        <span className="hidden sm:inline text-aazbeige/50">|</span>
        <a href="/privacy-policy" className="underline underline-offset-2 hover:text-pink-200 transition">
          Privacy Policy
        </a>
        <span className="hidden sm:inline text-aazbeige/50">|</span>
        <a href="/ugc-policy" className="underline underline-offset-2 hover:text-pink-200 transition">
          UGC Policy
        </a>
        <span className="hidden sm:inline text-aazbeige/50">|</span>
        <a href="/affiliate-disclosure" className="underline underline-offset-2 hover:text-pink-200 transition">
          Affiliate Disclosure
        </a>
      </nav>

      {/* Social Links */}
      <div className="relative z-10 flex justify-center space-x-5 mt-6">
        <a href="https://www.instagram.com/aazkal" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <img src="/icons/instagram.svg" alt="Instagram" className="w-8 h-8 opacity-80 hover:opacity-100 transition" />
        </a>
        <a href="https://www.youtube.com/@aazkal" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <img src="/icons/youtube.svg" alt="YouTube" className="w-8 h-8 opacity-80 hover:opacity-100 transition" />
        </a>
        <a href="https://www.pinterest.com/aazkal" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
          <img src="/icons/pinterest.svg" alt="Pinterest" className="w-8 h-8 opacity-80 hover:opacity-100 transition" />
        </a>
      </div>

      {/* Divider */}
      <div className="relative z-10 w-24 h-[1px] bg-gradient-to-r from-transparent via-pink-200 to-transparent mx-auto my-6"></div>

      {/* Copyright */}
      <p className="relative z-10 text-xs text-aazbeige/80 tracking-wide">
        © {year} <span className="font-semibold text-white">AazKal</span>. All Rights Reserved.
      </p>

      {/* Legal Disclaimer */}
      <p className="relative z-10 mt-3 text-[11px] text-aazbeige/60 leading-relaxed max-w-3xl mx-auto">
        Disclaimer: AazKal is an independent fashion inspiration platform and is not affiliated with or endorsed by any celebrity,
        designer, or brand. All references to celebrities are purely for stylistic inspiration and fair-use commentary.
      </p>
    </footer>
  );
}
