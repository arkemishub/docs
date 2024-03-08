/** @type {import('next').NextConfig} */
import nextra from 'nextra';
const nextConfig = {
    output: "standalone",
    async redirects() {
        return [
            {
                source: '/',
                destination: '/docs',
                permanent: true,
            },
        ]
    },
};

const withNextra = nextra({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx',
})

export default withNextra(nextConfig);
