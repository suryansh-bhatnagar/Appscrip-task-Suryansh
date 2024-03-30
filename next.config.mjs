/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ['images.unsplash.com', 'www.keralam.me', "cdn.britannica.com"],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'www.keralam.me',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'cdn.britannica.com',
                port: '',
            },
        ],
    }
};

export default nextConfig;
