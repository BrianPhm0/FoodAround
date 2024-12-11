/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#1fb6ff",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#13ce66",
        "gray-dark": "#273444",
        gray: "#8492a6",
        "gray-light": "#d3dce6",
        "midnignt-blue": "#41729F",
        "blue-gray": "#5885AF",
        "dark-gray": "#274472",
        "baby-blue": "#C3E0E5",
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      spacing: {
        1: "8px",
        2: "12px",
        3: "16px",
        4: "24px",
        5: "32px",
        6: "48px",
      },
      extend: {
        spacing: {
          "8xl": "96rem",
          "9xl": "128rem",
        },
        borderRadius: {
          "4xl": "2rem",
        },
      },
    },
  },
  plugins: [],
};
