/** @type {import('tailwindcss').Config} */
module.exports = {
  'fontawesome-svg-core': {
    'license': 'free'
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      '2xl': {'max': '1400px'},
      'xl': {'max': '1279px'},
      'lg': {'max': '1023px'},
      'md': {'max': '767px'},
      'sm': {'max': '639px'},  
    },
    extend: {
      colors :{
        //qr color
        "white": "hsl(0, 0%, 100%)",
        "lightGray": "hsl(212, 45%, 89%)",
        "grayishBlue": "hsl(220, 15%, 55%)",
        "darkBlue": "hsl(218, 44%, 22%)",
        //order color
        "paleBlue": "hsl(225, 100%, 94%)",
        "brightBlue": "hsl(245, 75%, 52%)",
        "veryPaleBlue": "hsl(225, 100%, 98%)",
        "desaturatedBlue": "hsl(224, 23%, 55%)",
        "darkBlue-order": "hsl(223, 47%, 23%)",

        //base-apparel
        "baseDesaturatedRed": "hsl(0, 36%, 70%)",
        "baseSoftRed": "hsl(0, 93%, 68%)",
        "baseDarkGrayishRed": "hsl(0, 6%, 24%)",
        "baseBgColor": "hsl(356deg 96% 98%)",

        //ir cell color pallete
        "irSoftBlue" : "#bde0fe",
        "irBlue": "#3a86ff",
        "irPurple" : "#8338EC",
          
      },
      fontFamily : {
        'outfit': ['Outfit', 'sans'],
        'redHatDisplay':['Red Hat Display', 'Arial'],
        'josefin': ['Josefin Sans', 'Arial']
      },
    }
  },
  daisyui: {
    themes: ["cupcake"],
  },
  plugins: [require("daisyui")],
}

