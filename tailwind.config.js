/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth : {
        container : "1320px",
      },
      fontFamily : {
        'sans': ["Open Sans"], 
        'pap' : ["Paprika"]
      },
      colors: {
         primary: "#FF7628",
         secondary: "#192239",
         gray: "#6C7D93"
      },
      
    },
  },
  plugins: [],
}

