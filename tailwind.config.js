/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'ssm':{'min':'320px','max':'815px'},
      'md':'769px',
      'ld':{'max':'1024px'},
      'lsm':{'min':'320px','max':'425px'},
    },
    extend: {
      
    },
  },
  plugins: [],
}

