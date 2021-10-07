module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "light-brown": "#f6eee0",
        "navy-blue": "#003060",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
