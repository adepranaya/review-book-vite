module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D34A6A",
        accent: "#FFF3EC",
        dark: '#423144'
      },
      fontFamily: {
        'sans': ['Inter', 'Sans-serif'],
        'heading': ['Josefin Sans', 'Sans-serif'],
      },
    },
  },
  plugins: [],
};
