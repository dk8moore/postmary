const designTokens = require('./src/designTokens');
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  prefix: 'tw-', // Ensures no conflict with MUI classes
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all relevant paths
    "app/**/*.{ts,tsx}", // Add paths from shadcn/ui setup
    "components/**/*.{ts,tsx}" // Add paths from shadcn/ui setup
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

        // Add colors from shadcn/ui setup
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        primary: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        secondary: ['Lato', 'sans-serif'],

        // Add font family from shadcn/ui setup
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), // Add plugin from shadcn/ui setup
  ],
};
