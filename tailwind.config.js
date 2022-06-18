module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#B4D51E",
        accent: "#FBF4E2",
        'blue-dark': '#463C74'
      },
      fontFamily: {
        'serif': ['Merriweather','ui-serif', 'Georgia', 'Cambria', "Times New Roman", 'Times', 'serif'],
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
        'heading': ['Josefin Sans', 'Sans-serif'],
      },
    },
  },
  plugins: [],
};
