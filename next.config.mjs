/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // required for static site
  images: {
    unoptimized: true, // important for static export if you're using <Image>
},
};

module.exports = nextConfig;