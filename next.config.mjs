/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If you are deploying to https://<username>.github.io/<repository-name>/
  basePath: '/Vyoma',
  assetPrefix: '/Vyoma',
};

export default nextConfig;
