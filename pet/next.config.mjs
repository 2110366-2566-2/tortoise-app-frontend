/**  @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        instrumentationHook: true,
    },
    basePath: '/petpal',
    images: {
        domains: ['drive.google.com', 'picsum.photos', 'cdn2.thedogapi.com', 'scontent.fbkk5-7.fna.fbcdn.net', 'images.dog.ceo'],
        remotePatterns: [
            {
              protocol: "https",
              hostname: "**",
            },
          ],
    },
    webpack: (config) => {
        config.resolve.alias.canvas = false;
        config.resolve.extensionAlias = {
            '.js': ['.js', '.ts', '.tsx'],
        };
        return config;
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/user',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
