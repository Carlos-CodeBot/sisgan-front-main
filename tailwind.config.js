/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { 100: "#38a169", 200: "#c6f6d5", 300: "#276749" },
        secondary: { 100: "#edf2f7", 200: "#9ca8b8" },
        blue: "#3182ce",
        red: "#e53e3e",
      },
    },
  },
  plugins: [],
};
