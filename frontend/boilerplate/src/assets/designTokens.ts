interface Colors {
  primary: string;
  secondary: string;
  soft: string;
  error: string;
  success: string;
  info: string;
  warning: string;
  backgroundDefault: string;
  backgroundPaper: string;
  textPrimary: string;
  textSecondary: string;
  divider: string;
  upvote: string;
  downvote: string;
  containerPrimary: string;
  containerSecondary: string;
}

interface Fonts {
  primary: string;
  secondary: string;
}

interface DesignTokens {
  colors: Colors;
  fonts: Fonts;
}

const designTokens: DesignTokens = {
  colors: {
    primary: '#6c3af4',
    secondary: '#605b71',
    soft: '#f0ebfe',
    error: '#ba1b1b',
    success: '#006e10',
    info: '#0062a2',
    warning: '#606200',
    backgroundDefault: '#ffffff',
    backgroundPaper: '#ffffff',
    textPrimary: '#1c1b1e',
    textSecondary: '#6D6B87',
    divider: '#79757f',
    upvote: '#6c3af4',
    downvote: '#ba1b1b',
    containerPrimary: '#e8deff',
    containerSecondary: '#e7dff8',
  },
  fonts: {
    primary: 'Roboto, sans-serif',
    secondary: 'Lato, sans-serif',
  },
};

export default designTokens;
