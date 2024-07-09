import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	
	theme: {
		extend: {
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        text: ['Poppins', 'sans-serif'],
      },
      lineHeight: {
        '130': '1.3',
      },
      fontSize: {
        h270: '270px',
        h42: '42px',
        h26: '26px',
        h18: '18px',
        h14: '14px',
        t16: '16px',
        t14: '14px',
        t12: '12px',
        t10: '10px',
        t8: '8px',
      },
      colors: {
        'b-grey': '#757170',
        'l-grey': '#CCC4C1',  
        'd-grey': '#68605D',      
        'sl-brown': '#2C2421',  
        'l-brown': '#211C1A',  
        'd-brown': '#191717', 
      }
    },
	},
	plugins: [],
}
export default config
