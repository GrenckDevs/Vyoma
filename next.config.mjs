/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Vyoma',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
