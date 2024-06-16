import { createTheme, PaletteColorOptions } from '@mui/material/styles';
import designTokens from '@asset/designTokens';

const augmentColor = (mainColor: string): PaletteColorOptions => {
  return createTheme({
    palette: {
      primary: { main: mainColor, contrastText: '#ffffff' },
    },
  }).palette.primary;
};

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: augmentColor(designTokens.colors.primary),
    secondary: augmentColor(designTokens.colors.secondary),
    error: augmentColor(designTokens.colors.error),
    success: augmentColor(designTokens.colors.success),
    info: augmentColor(designTokens.colors.info),
    warning: augmentColor(designTokens.colors.warning),
    background: {
      default: '#1c1b1e',
      paper: '#1c1b1e',
    },
    text: {
      primary: '#e6e1e6',
      secondary: '#e6e1e6',
    },
    divider: '#938f99',
  },
  typography: {
    fontFamily: designTokens.fonts.secondary,
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: augmentColor(designTokens.colors.primary),
    secondary: augmentColor(designTokens.colors.secondary),
    error: augmentColor(designTokens.colors.error),
    success: augmentColor(designTokens.colors.success),
    info: augmentColor(designTokens.colors.info),
    warning: augmentColor(designTokens.colors.warning),
    background: {
      default: designTokens.colors.backgroundDefault,
      paper: designTokens.colors.backgroundPaper,
    },
    text: {
      primary: designTokens.colors.textPrimary,
      secondary: designTokens.colors.textSecondary,
    },
    divider: designTokens.colors.divider,
  },
  typography: {
    fontFamily: designTokens.fonts.primary,
  },
});

export { darkTheme, lightTheme };
