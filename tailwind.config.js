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
        "black" : "rgba(39,43,44,.87)",
        "kahve" : "#323232",
        "siyah" : "rgba(0, 0, 0, .5)",
      },
      spacing: {
        '128' : "28rem",
      }

    },
  },
  plugins: [],
}

