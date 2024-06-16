const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@ui': path.resolve(__dirname, 'src/components/ui'),
      '@style': path.resolve(__dirname, 'src/assets/styles'),
    },
  },
};