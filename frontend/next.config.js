/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  env: {
    BACKEND_URI: 'https://backend-dynamic-portfolio.herokuapp.com/api',
  },
  images: {
    unoptimized: true,
    domains: [
      'res.cloudinary.com',
      'dazzlesl.info',
      'localhost',
      'cdn-icons-png.flaticon.com',
    ],
  },

  nextConfig,
};
