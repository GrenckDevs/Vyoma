/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If you are deploying to https://<username>.github.io/<repository-name>/
  // uncomment the lines below and replace <repository-name> with your repo name
  // basePath: '/Vyoma',
  // assetPrefix: '/Vyoma',
};

export default nextConfig;
