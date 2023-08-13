/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "linear-black": "linear-gradient(to right, #222, #373737)",
        "linear-yellow": "linear-gradient(to right, #fbc82e, #f9c234)",
        "linear-red": "linear-gradient(to right, #f32d3c, #fc4750)",
        "linear-gray": "linear-gradient(to right, #ececec, #eeedf2)",
        "linear-green": "linear-gradient(to right, #2cd06f, #40c87cc9)",
        "linear-blue": "linear-gradient(to right, #157cff, #1d8bfb)",
      },
    },
  },
  plugins: [],
};
