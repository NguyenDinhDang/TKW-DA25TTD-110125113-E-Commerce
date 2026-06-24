/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Bắt buộc để Next.js xuất ra thư mục tĩnh mang tên 'out'
  basePath: '/TKW-DA25TTD-110125113-E-Commerce', 
  images: {
    unoptimized: true, 
  },
};

module.exports = nextConfig;
