/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true, // Tối ưu routing cho file tĩnh (Của bạn)
  
  // BẮT BUỘC: Phải có 2 dòng này thì web mới nhận được CSS/JS trên GitHub Pages
  basePath: '/E-commerce', 
  assetPrefix: '/E-commerce/',
};

module.exports = nextConfig;