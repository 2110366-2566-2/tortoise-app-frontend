/**  @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        instrumentationHook: true,
    },
    basePath: '/petpal',
    images: {
        domains: ['drive.google.com', 'picsum.photos', 'cdn2.thedogapi.com']
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
