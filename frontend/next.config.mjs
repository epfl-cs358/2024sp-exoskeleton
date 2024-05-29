/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack: (config, { isServer }) => {
    // Add file loader for .ogg files
    config.module.rules.push({
      test: /\.ogg$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: `/_next/static/sounds/`,
            outputPath: `${isServer ? "../" : ""}static/sounds/`,
            name: '[name].[hash].[ext]',
          },
        },
      ],
    });

    // Ignore .cpp files and other non-JS files
    config.module.rules.push({
        test: /\.(cpp|hpp|h|c)$/,
        use: 'ignore-loader'
    });
        
    return config;
  },
};

export default nextConfig;
