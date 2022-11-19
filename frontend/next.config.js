/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  env: {
    BACKEND_URI: 'http://localhost:8000/api',
  },
  nextConfig,
};
