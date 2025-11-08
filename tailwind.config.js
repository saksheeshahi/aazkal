module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aazpink: "#FF1493",
        aazbrown: "#4B2E2B",
        aazbeige: "#FFF5F8",
        aazcream: "#FFF1F5",
        aazsoftpink: "#FF66A3",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      boxShadow: { pinky: "0 4px 30px rgba(255, 20, 147, 0.15)" },
    },
  },
  plugins: [],
};