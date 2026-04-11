/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Gán các lớp class vào biến CSS
        background: "var(--bg-color)",
        foreground: "var(--text-color)",
        primary: "var(--primary-color)",
      },
    },
  },
  plugins: [],
};