const withTM = require('next-transpile-modules')([])

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	trailingSlash: false,
}

module.exports = withTM(nextConfig)
