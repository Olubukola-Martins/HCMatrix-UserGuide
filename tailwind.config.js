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
        adminBG: "#E6E9F0",
        adminHighlight: "#F77366",
        customGreen: {
          DEFAULT: "rgba(168, 255, 171, 0.25)",
          normal: "rgba(9, 124, 14, 1)",
        },
        customRed: {
          DEFAULT: "rgba(255, 169, 169, 0.1)",
          normal: "rgba(255, 57, 57, 1)",
        },
        customGray: {
          DEFAULT: "#3A3A3A",
          dark: "rgba(58, 58, 58, 0.9)",
          semiDark: "rgba(58, 58, 58, 0.8)",
          light: "rgba(58, 58, 58, 0.7)",
          lightest: "rgba(58, 58, 58, 0.6)",
          fade: "rgba(58, 58, 58, 0.5)",
          lighter: "#ffffffb2",
          tag: "rgba(197, 197, 197, 0.3)",
        },
        btn: {
          red: "#F77366",
        },
      },
      fontFamily: {
        body: ["Inter"],
      },
    },
  },
  plugins: [],
};
