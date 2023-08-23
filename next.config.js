const withNextra = require("nextra")({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  latex: true,
  flexsearch: {
    codeblocks: false
  },
  defaultShowCopyCode: true
});

const nextConfig = {
  images: {
    unoptimized: true,
  },
  ...withNextra(),
};

module.exports = nextConfig;
