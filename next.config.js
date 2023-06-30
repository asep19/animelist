/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'cdn.myanimelist.net',
  //       pathname: '/images/anime/**'
  //     }
  //   ]
  // }
  images: {
    domains: ['https://cdn.myanimelist.net'],
  },
}

module.exports = nextConfig
