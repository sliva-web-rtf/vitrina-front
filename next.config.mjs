/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'vitrina-rtf.ru' | 'витрина.прокомпетенции.рф',
                port: '',
                pathname: '/api/project/image/*',
            },
        ],
    },
    output: 'standalone',
};

export default nextConfig;
