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
      "white": "hsl(0, 0%, 100%)",
      "lightGray": "hsl(212, 45%, 89%)",
      "grayishBlue": "hsl(220, 15%, 55%)",
      "darkBlue": "hsl(218, 44%, 22%)"    
    },
    fontFamily : {
      'outfit': ['Outfit', 'sans'],
    },
    backgroundImage: {
      'example-bg' : "url('/qr/design/desktop-design.jpg')",
    },
  },
  plugins: [],
}
export default config
