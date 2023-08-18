const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

const nextConfig = {
  ...withNextra(),
  output: "export", // 打包模式
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
