const path = require('path');
module.exports = {
  webpack: {
    alias: {
        '@': path.resolve(__dirname, 'src'),
        '@asset': path.resolve(__dirname, 'src/assets'),   
        '@common': path.resolve(__dirname, 'src/components/common'),
        '@landing': path.resolve(__dirname, 'src/components/landing'),
        '@lib': path.resolve(__dirname, 'src/lib'),
        '@page': path.resolve(__dirname, 'src/pages'),
        '@style': path.resolve(__dirname, 'src/assets/styles'),
        '@ui': path.resolve(__dirname, 'src/components/ui'),
    },
  },
};