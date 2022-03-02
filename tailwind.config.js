module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'xs': '360px'
      },
      colors: {
        ukraineblue: '#005BBA',
        ukraineyellow: '#FDD600'
      }
    }
  },
  
  plugins: [],
}