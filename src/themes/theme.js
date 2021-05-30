import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#17A398',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#F2F7F2',
      contrastText: '#C4C8C4'
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: [
      '"Fredoka One"',
      'cursive'
    ].join(','),
    truculenta: [
      'Truculenta',
      'sans-serif'
    ].join(','),
    iconSize: '1.875rem', // 30px for 1rem = 16px
    subtitle1: {
      fontSize: 16,
      position: 'relative'
    },
    subtitle2: {
      fontSize: 14
    }
  },
});