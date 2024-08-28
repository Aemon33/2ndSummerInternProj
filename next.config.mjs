/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns:[
            {
                protocol: 'http',
                hostname:'localhost',
                port:'8000',
                pathname:'/**',
            }
        ]
    },
    
        reactStrictMode: true,
        env: {
          BASE_URL: process.env.BASE_URL,
        }



};

export default nextConfig;
