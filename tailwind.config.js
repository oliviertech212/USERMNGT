/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      screens: {
     
        sm: '440px',
        md_sm:'640px',
        md: '768px',
        lg: '976px',
        mdl: '1240px',
        xl: '1440px',
      },
      colors: {
        primary: "#1e293b",
        secondary: "#0f172a",
        secondary1:"#6466f1",
        secondary2:"#c6d3fd",
        dark:"#0f172a",
        "dark-text-fill": "#F3F4F6",
         "text1":  "#e2e8f0",
        "text2":"#64758b"
         ,
        "light-bg": "#ffffff",
        "light-bg-second":"#f1f5f9",
        "light-text": "#111827",
        "header-text": "#173B3F",
        "dark-bg": "#1F2A37",
        "dark-frame-bg": "#262E3D",
        "dark-tertiary": "#374151",
        "divider-bg": "#E5E7EB",
        "dark-45": "#00000073",
        "border-light": "#e2e8f0",
        "border-dark": "#5f5b5b80",
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },


    },
  },
  plugins: [],
}

