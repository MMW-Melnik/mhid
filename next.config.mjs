/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	optimizeFonts: true,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
		FORM_ID: process.env.FORM_ID
	},
	output: 'export', // for static export
	images: {
		unoptimized: true // ✅ disable Next.js image optimization for Netlify
	}
}

export default nextConfig
