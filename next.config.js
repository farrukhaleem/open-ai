/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // important for static export if you're using <Image>
},
};

module.exports = nextConfig;