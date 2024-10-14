/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'vitrina-urfu.ru',
                port: '',
                pathname: '/api/project/image/*',
            },
        ],
    },
};

export default nextConfig;
