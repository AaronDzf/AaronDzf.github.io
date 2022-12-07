import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CssBaseline from  '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const fontList = [
  'Inconsolata',
  'Space Mono',
  'Courier New',
]

const siteTheme = createTheme({
  palette: { 
    type: 'dark',
    primary: {
      main: '#121212',
      dark: '#737373',
    },
    secondary: {
      main: '#ffa000',
      light: '#ffc400',
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
  components: {
    MuiCssBaseline:{
      styleOverrides:{
        body:{
          backgroundImage: 'url(/background.png)',
        }
      }
    },
  },
  typography: {
    fontFamily: fontList.join(','),
    h3: {
      fontFamily: fontList.slice(1,3).join(','),
    }
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={siteTheme}>
      <CssBaseline/>
        <App />
    </ThemeProvider>
    {console.log([fontList.slice(1,3)].join(','))}
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
