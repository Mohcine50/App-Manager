/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        indigo: "#4338CA",
        "btn-bg": "#4763E4",
        "input-border": "#5C73DB",
      },
      width: {
        50: "32rem",
      },
    },
  },
  plugins: [],
};
