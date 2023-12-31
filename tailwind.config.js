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

        "introRed": "hsl(0, 100%, 74%)",
        "introGreen": "hsl(154, 59%, 51%)",
        "introBlue": "hsl(248, 32%, 49%)",
        "introDarkBlue": "hsl(249, 10%, 26%)",
        "introGrayishBlue": "hsl(246, 25%, 77%)",

        //ping
        "pingBlue": "hsl(223, 87%, 63%)",
        "pingPaleBlue": "hsl(223, 100%, 88%)",
        "pingLightRed": "hsl(354, 100%, 66%)",
        "pingGray": "hsl(0, 0%, 59%)",
        "pingVeryDarkBlue": "hsl(209, 33%, 12%)",

        //newsletter
        "newsletterTomato": "hsl(4, 100%, 67%)",
        "newsletterDarkSlateGrey": "hsl(234, 29%, 20%)",
        "newsletterCharcoalGrey": "hsl(235, 18%, 26%)",
        "newsletterGrey": "hsl(231, 7%, 60%)",
        "newsletterWhite": "hsl(0, 0%, 100%)",
        "newsletterFromGrad" : "#ff537a",
        "newsletterToGrad" : "#ff693e",

        "agePurple": "hsl(259, 100%, 65%)",
        "ageLightRed": "hsl(0, 100%, 67%)",
        "ageWhite": "hsl(0, 0%, 100%)",
        "ageOffWhite": "hsl(0, 0%, 94%)",
        "ageLightGrey": "hsl(0, 0%, 86%)",
        "ageSmokeyGrey": "hsl(0, 1%, 44%)",
        "ageOffBlack": "hsl(0, 0%, 8%)",
      

        //ir cell color pallete
        "irSoftBlue" : "#bde0fe",
        "irBlue": "#3a86ff",
        "irPurple" : "#8338EC",
          
      },
      fontFamily : {
        'outfit': ['Outfit', 'sans'],
        'redHatDisplay':['Red Hat Display', 'Arial'],
        'josefin': ['Josefin Sans', 'Arial'],
        'poppins' : ['Poppins', 'Arial'],
        'libreFranklin' : ['Libre Franklin', 'Arial'],
        'roboto' : ['Roboto', 'Arial']
      },
    }
  },
  daisyui: {
    themes: ["cupcake"],
  },
  plugins: [require("daisyui")],
}

