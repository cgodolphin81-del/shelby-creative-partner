module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['image.lexica.art', 'image.pollinations.ai', 'api.waifu.pics'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
    ];
  },
}
