const nextConfig = {
    async redirects() {
      return [
        {
          source: '/api/house/:id',
          destination: '/api/house/[id]',
          permanent: true,
        },
      ]
    },
  };

export default nextConfig;
