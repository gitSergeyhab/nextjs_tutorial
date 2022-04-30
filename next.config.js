/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/old-products',
        destination: '/products',
        permanent: false, // 307
      },
      {
        source: '/old-products/:id',
        destination: '/products/:id',
        permanent: true, // 308
      }
    ]
  }
}

module.exports = nextConfig
