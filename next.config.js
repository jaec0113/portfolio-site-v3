/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "images.ctfassets.net",
        pathname: `/${process.env.CONTENTFUL_SPACE_ID}/**`
      }

    ]
  }
}

module.exports = nextConfig
