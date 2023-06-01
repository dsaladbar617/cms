/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['cdn.sanity.io'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'via.placeholder.com',
				port: '',
				pathname: '/150'
			}
		]
	}
};

module.exports = nextConfig;
