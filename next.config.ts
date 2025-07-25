import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '/vi/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        pathname: '/vi/**',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  redirects: async () => [
    {
      source: '/(.*)',
      has: [
        {
          type: 'host',
          value: 'www.haydenburgoyne.com',
        },
      ],
      destination: 'https://haydenburgoyne.com/:1',
      permanent: true,
    },
  ],
};

export default nextConfig;
