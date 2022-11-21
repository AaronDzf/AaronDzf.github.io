import logo from './logo.svg';
import React from 'react';
import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Tutorial_tictactoe from "./Tutorial_tictactoe";
import Home from "./Home";
import { render } from '@testing-library/react';

//MUI Library imports
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {ButtonAppBar} from './components/mui';
import CssBaseline from '@mui/material/CssBaseline';


const theme = createTheme();

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline/>
          <ButtonAppBar/>
        <BrowserRouter>
          <div>
            <h1>Home Page</h1>
            <ul className="header">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/Tutorial_tictactoe">Tutorial Game</Link></li>
            </ul>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/Tutorial_tictactoe" element={<Tutorial_tictactoe/>} />
            </Routes>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;
