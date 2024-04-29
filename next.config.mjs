/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // experimental: {
  //   appDir: true,
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/maryamHabibpourr/blogPost/main/images/**',
      },
    ],
  },
  typescript:{
    ignoreBuildErrors: true,
}

};

export default nextConfig;
