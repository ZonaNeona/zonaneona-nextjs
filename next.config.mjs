/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "neonfest.ru",
        port: "",
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;
