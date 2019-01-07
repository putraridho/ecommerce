const withFonts = require('next-fonts');
module.exports = withFonts({
  // assetPrefix: './fonts/',
  enableSvg: true,
  webpack(config, options) {
    return config;
  }
});

