const withNextra = require("nextra")({
  export:'out',
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  latex: true,
  flexsearch: {
    codeblocks: false
  },
  defaultShowCopyCode: true
});

const nextConfig = {
  distDir: 'build',
  images: {
    unoptimized: true,
  },
  ...withNextra(),
};

module.exports = nextConfig;
