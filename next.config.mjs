/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
      },
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
};

export default nextConfig;
