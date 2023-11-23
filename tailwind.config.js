/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'transbank': 'url(/src/Components/Assets/Transbank.png)',
        'ns': 'url(/src/Components/Assets/NS.png)',
        'movistar': 'url(/src/Components/Assets/Movistar.png)',
      }
    },
  },
  plugins: [require("daisyui")],
}

