const withTM = require('next-transpile-modules')([])

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	trailingSlash: true,
}

module.exports = withTM(nextConfig)
