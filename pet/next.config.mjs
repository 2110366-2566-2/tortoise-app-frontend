/**  @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        instrumentationHook: true,
    },
    basePath: '/petpal',
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
                destination: '/user/login',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
