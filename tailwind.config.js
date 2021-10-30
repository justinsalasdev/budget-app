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
        a1: "auto 1fr",
      },
      gridTemplateRows: {
        a1: "auto 1fr",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["disabled"],
    },
  },
  plugins: [],
};
