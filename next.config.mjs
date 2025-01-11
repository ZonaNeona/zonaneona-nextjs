/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
};

export default nextConfig;

export default {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'neonfest.ru',
        port: '',
        pathname: '/media/**',
      },
    ],
  },
};
