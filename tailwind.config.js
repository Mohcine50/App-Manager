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
      backgroundImage: {
        "gr-l":
          "linear-gradient(180deg, #131C55 0%, rgba(19, 28, 85, 0.35) 104.8%, rgba(19, 28, 85, 0) 169.64%);",
      },
    },
  },
  plugins: [],
};
