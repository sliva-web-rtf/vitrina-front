/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.vitrina-rtf.ru',
                port: '',
                pathname: '/api/project/image/*',
            },
        ],
    },
    output: 'standalone',
};

export default nextConfig;
