/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "regal-blue":
          "linear-gradient(90deg, rgba(15,1,249,1) 0%, rgba(255,0,129,1) 0%, rgba(186,11,233,1) 24%, rgba(0,48,255,1) 41%, rgba(174,197,250,1) 60%, rgba(101,195,252,1) 79%, rgba(0,255,132,1) 100%);",
      },
    },
  },
  plugins: [],
};