/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/:path*',
                destination: `http://localhost:8080/:path*`,
            },
        ];
    },
    reactStrictMode: false,
    modularizeImports: {
        '@mui/icons-material': {
            transform: '@mui/icons-material/{{member}}',
        },
    },
}

module.exports = nextConfig