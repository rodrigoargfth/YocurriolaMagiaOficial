/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pastelBrown: {
          light: "#F5E8DE",
          base: "#DCC5B3",
          dark: "#A17C6B",
          deeper: "#6E5F57",
        },
      },
      backgroundImage: {
        "gradient-cover":
          "linear-gradient(to left bottom, #dab894, #d9ac8f, #d5a08d, #d0958c, #c98b8d)",
      },
    },
  },
  plugins: [],
};
