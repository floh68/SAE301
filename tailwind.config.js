module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      'lato': ['Lato', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif']
    },
    colors: {
      blanc: '#FFFFFF',
      noir: '#000000',
      bleuFonce: '#0069C9',
      gris:'#B0B0B0',
    },
  },
  },
  plugins: [],
}