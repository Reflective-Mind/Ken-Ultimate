/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // This allows us to serve static HTML files directly
  // which is important for our case since we're converting from a single HTML file
  trailingSlash: true,
  
  // Configure asset handling
  images: {
    unoptimized: true,
    disableStaticImages: true,
    domains: ['localhost'],
  },
  
  // Custom webpack configuration to handle Three.js properly
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/files',
          outputPath: 'static/files',
        },
      },
    });

    return config;
  },

  // Output as a standalone app to improve deployment compatibility
  output: 'standalone',
};

module.exports = nextConfig; 