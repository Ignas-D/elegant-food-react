/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom': ["Playfair Display", 'serif'],
      },
      colors: {
        'ecru': '#C2A878',
        'baby-powder' : '#F1F5F2',
        'slate-gray' : "#717C89",
        'dun' : "#DDC69B"
      },
      backgroundImage: theme => ({
        'custom-image': "url('src/assets/Burger box.jpeg')",
      }),
    },
  },
  plugins: [],
}

