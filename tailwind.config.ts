import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],

	theme: {
		extend: {
			fontFamily: {
				heading: ['Italiana', 'Times New Roman', 'sans-serif'],
				text: ['Helvetica', 'Arial', 'sans-serif'],
				imgtext: ['Helvetica-Oblique', 'Arial Italic', 'sans-serif']
			},
			lineHeight: {
				'130': '1.3'
			},
			fontSize: {
				h270: '270px',
				h128: '128px',
				h60: '60px',
				h42: '42px',
				h26: '26px',
				h18: '18px',
				h14: '14px',
				t26: '26px',
				t18: '18px',
				t16: '16px',
				t14: '14px',
				t12: '12px',
				t10: '10px',
				t8: '8px'
			},
			colors: {
				dark: '#141414',
				sand: '#C2C0BA',
				'd-grey': '#68605D',
				'l-grey': '#CCC4C1',
				'b-grey': '#413F3F'
			},
			screens: {
				xs: '480px',
				sm: '768px',
				md: '1000px',
				lg: '1400px'
			}
		}
	},
	plugins: []
}
export default config
