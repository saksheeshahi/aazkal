export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#FFF5F8] via-[#FFEAF0] to-[#FFFDFE] text-center pt-32">
      <img
        src="/logo-umbrella.png"
        alt="AazKal Hero Umbrella Logo"
        className="mx-auto w-52 mb-6 drop-shadow-lg animate-fadeIn"
      />
      <h1 className="text-5xl font-extrabold text-[#4B2E2B] mb-4">
        Real Looks. Real People. Real Style.
      </h1>
      <p className="text-lg max-w-2xl mx-auto mb-6 text-[#5A3A36]">
        Discover, recreate, and celebrate the iconic looks of your favorite
        stars. Whether it’s Kajol’s timeless elegance or Janhvi’s modern
        sparkle — AazKal helps you bring their fashion to life.
      </p>
      <a
        href="/create-your-look"
        className="bg-[#FF1493] text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 transition-transform transform hover:scale-105 duration-300"
      >
        ✨ Create Your Look
      </a>
    </section>
  );
}
