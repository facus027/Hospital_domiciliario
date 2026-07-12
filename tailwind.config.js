/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
  hospital: {
    dark: "#004346",
    green: "#017f35",
    grayBg: "#f2f2f2",
    text: "#606060",
  },

  fontFamily: {
        helvetica: ["Helvetica", "Arial", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 45px rgba(0, 67, 70, 0.12)",
      },
      
},

backgroundImage: {
        'hero-pattern': "url('/public/elementos web_1.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },


  },
  plugins: [],
}

