/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1A1A1A",
        primary: "#fff",
        secondary: "#CAFF33",
        footer: "#1C1C1C"
      },

      fontFamily: {
        lexend: "Lexend",
        playfair: "Playfair Display"
      },
    },
  },
  plugins: [],
};
