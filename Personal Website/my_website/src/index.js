import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CssBaseline from  '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const darkTheme = createTheme({
  palette: { 
    mode: 'dark',
  },
  components: {
    MuiListItemText: {
      styleOverrides: {
        root: {
          color: 'red',
          textDecoration: 'none',
          },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: 'inherit',
          underline: 'none',
        }
      }
    }
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        <App />
    </ThemeProvider>
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
