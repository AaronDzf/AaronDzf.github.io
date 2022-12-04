import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CssBaseline from  '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { amber } from '@mui/material/colors';

const siteTheme = createTheme({
  palette: { 
    type: 'dark',
    primary: {
      main: '#121212',
      dark: '#737373',
    },
    secondary: {
      main: '#ffa000',
    },
    background:{
      default:'#00352c',
      paper:'#121212',
    },
    text:{
      primary: '#fff',
    },
  },
  components: {
    MuiListItemText: {
      styleOverrides: {
        root: {
          color: '#fff',
          },
      },
    },
  },
  typography: {
    fontFamily: [
      'Oxygen',
      'Roboto',
      'Helvetica',
      'Arial'
    ].join(',')
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={siteTheme}>
      <CssBaseline />
        <App />
    </ThemeProvider>
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
