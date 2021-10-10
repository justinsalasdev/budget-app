module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Prompt"],
    },

    extend: {
      gridTemplateColumns: {
        "1aa": "1fr auto auto",
        a1a: "auto 1fr auto",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
