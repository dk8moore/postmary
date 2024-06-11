const designTokens = require('./src/designTokens');

module.exports = {
  prefix: 'tw-', // Ensures no conflict with MUI classes
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all relevant paths
  ],
  theme: {
    extend: {
      colors: {
        primary: designTokens.colors.primary,
        secondary: designTokens.colors.secondary,
        soft: designTokens.colors.soft,
        error: designTokens.colors.error,
        success: designTokens.colors.success,
        info: designTokens.colors.info,
        warning: designTokens.colors.warning,
        backgroundDefault: designTokens.colors.backgroundDefault,
        backgroundPaper: designTokens.colors.backgroundPaper,
        textPrimary: designTokens.colors.textPrimary,
        textSecondary: designTokens.colors.textSecondary,
        divider: designTokens.colors.divider,
        upvote: designTokens.colors.upvote,
        downvote: designTokens.colors.downvote,
        containerPrimary: designTokens.colors.containerPrimary,
        containerSecondary: designTokens.colors.containerSecondary,
      },
      fontFamily: {
        primary: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        secondary: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
