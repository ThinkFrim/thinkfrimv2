/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      display: ['Poppins', 'sans-serif'],
      body: ['Poppins', 'sans-serif']
    },
    extend: {
      backgroundColor: {
        'main-bg': '#0F0E17',
        'secondary-bg': '#2F2D3C', 
        'underline-bg': '#F9BC60' 
        
      },
    },
  },
  plugins: [],
}

