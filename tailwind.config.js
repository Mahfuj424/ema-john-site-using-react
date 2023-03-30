/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyUi: {
    themes: [
      {
        myTheme: {
          primary: "#1C2B35;",

          secondary: "#ff9900",

          accent: "#995c00",

          neutral: "#95A0A7",

          "base-100": "#3A4D59",

          white: "#ffffff",

          success: "#1c2b35",

          black: "#00000",

          error: "#FB375E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
