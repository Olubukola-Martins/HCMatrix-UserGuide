/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gradientColorStops: {
        "custom-white": "rgba(255, 255, 255, 0.24)",
        "custom-gray": "rgba(196, 196, 196, 0.04)",
      },
      colors: {
        primary: "#ffffff",
        customGray: {
          DEFAULT: "#3A3A3A",
          dark: "rgba(58, 58, 58, 0.9)",
          semiDark: "rgba(58, 58, 58, 0.8)",
          light: "rgba(58, 58, 58, 0.7)",
          lightest: "rgba(58, 58, 58, 0.7)",
          lighter: "#ffffffb2",
        },
      },
      fontFamily: {
        body: ["Inter"],
      },
    },
  },
  plugins: [],
};
