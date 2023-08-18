const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

const nextConfig = {
  distDir: 'build',
  images: {
    unoptimized: true,
  },
  ...withNextra(),
};

module.exports = nextConfig;
