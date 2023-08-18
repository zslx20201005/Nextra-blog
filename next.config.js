/** @type {import('next').NextConfig} */
const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  basePath: '/gh-pages-test',
});

const nextConfig = {
  output: "export", // 打包模式
  images: {
    unoptimized: true,
  },
  ...withNextra(),
};

module.exports = nextConfig;
