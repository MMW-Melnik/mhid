/** @type {import('next').NextConfig} */

const nextConfig = {
	poweredByHeader: false,
	optimizeFonts: true,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV
	}
}

export default nextConfig
