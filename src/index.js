import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CssBaseline from  '@mui/material/CssBaseline'
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles'
import background from './Assets/images/background.png'

const fontList = [
  'Inconsolata',
  'Space Mono',
  'Courier New',
]

let siteTheme = createTheme({
  palette: { 
    type: 'dark',
    primary: {
      main: '#121212',
      light: '#424242',
    },
    secondary: {
      main: '#ffa000',
      light: '#ffc400',
      dark: '#b27000',
    },
    background:{
      paper:'#121212',
    },
    text:{
      primary: '#fff',
      secondary: '#121212'
    },
  },
  spacing: 4,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiCssBaseline:{
      styleOverrides:{
        body:{
          backgroundImage:  `url(${background})`
        }
      },
    },
  },
  typography: {
    fontFamily: fontList.join(','),
    h3: {
      fontFamily: fontList.slice(1,3).join(','),
    },
  },
});

siteTheme = responsiveFontSizes(siteTheme);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={siteTheme}>
      <CssBaseline/>
        <App />
    </ThemeProvider>
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
