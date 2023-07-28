/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container : {
      center: true
    },

    extend: {
      backgroundImage : {
        "banner": "url('/src/images/banner.jpg')",
      },
      colors : {
        "black" : "rgba(39,43,44,.87)" 
      }

    },
  },
  plugins: [],
}

