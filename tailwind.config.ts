import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     
    },
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
      
        
    },
    fontFamily : {
      'outfit': ['Outfit', 'sans'],
      'redHatDisplay':['Red Hat Display', 'Arial'],
    },
    backgroundImage: {
      'example-bg' : "url('/qr/design/desktop-design.jpg')",
    },
  },
  plugins: [],
}
export default config
