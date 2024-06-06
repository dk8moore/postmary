import { createTheme } from '@mui/material/styles';

const augmentColor = (color) => {
  return createTheme({
    palette: {
      primary: color,
    },
  }).palette.primary;
};

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: augmentColor({ main: "#cdbeff", contrastText: "#32009a" }),
    secondary: augmentColor({ main: "#cac3dc", contrastText: "#322e41" }),
    error: augmentColor({ main: "#ffb4a9", contrastText: "#680003" }),
    success: augmentColor({ main: "#79dd72", contrastText: "#003a03" }),
    info: augmentColor({ main: "#99cbff", contrastText: "#003257" }),
    warning: augmentColor({ main: "#cace09", contrastText: "#313300" }),
    text: {
      primary: "#e6e1e6",
      secondary: "#e6e1e6",
    },
    background: {
      default: "#1c1b1e",
      paper: "#1c1b1e",
    },
    divider: "#938f99",
    upvote: augmentColor({ main: "#cdbeff", contrastText: "#32009a" }),
    downvote: augmentColor({ main: "#ffb4a9", contrastText: "#680003" }),
    containerPrimary: augmentColor({ main: "#4b24ba", contrastText: "#e8deff" }),
    containerSecondary: augmentColor({ main: "#494458", contrastText: "#e7dff8" }),
  },
  typography: {
    fontFamily: 'Lato',
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: augmentColor({ main: "#6c3af4", contrastText: "#ffffff" }),
    secondary: augmentColor({ main: "#605b71", contrastText: "#ffffff" }),
    soft: augmentColor({ main: "#f0ebfe", contrastText: "#6c3af4" }),
    error: augmentColor({ main: "#ba1b1b", contrastText: "#ffffff" }),
    success: augmentColor({ main: "#006e10", contrastText: "#ffffff" }),
    info: augmentColor({ main: "#0062a2", contrastText: "#ffffff" }),
    warning: augmentColor({ main: "#606200", contrastText: "#313300" }),
    text: {
      primary: "#1c1b1e",
      secondary: "#6D6B87",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    divider: "#79757f",
    upvote: augmentColor({ main: "#6c3af4", contrastText: "#ffffff" }),
    downvote: augmentColor({ main: "#ba1b1b", contrastText: "#ffffff" }),
    containerPrimary: augmentColor({ main: "#e8deff", contrastText: "#1c0062" }),
    containerSecondary: augmentColor({ main: "#e7dff8", contrastText: "#1d192b" }),
  },
  typography: {
    fontFamily: 'Roboto',
  },
});

export { darkTheme, lightTheme };