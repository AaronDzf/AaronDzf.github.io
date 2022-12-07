import logo from './logo.svg';
import React from 'react';
import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "./Home";
import TicTacToe from "./TicTacToe";
import Exollision from './Exollision';
import { render } from '@testing-library/react';

//MUI Library imports
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {DrawerAppBar} from './components/mui';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import { Box, List, ListItem, ListItemIcon, ListItemButton, Divider, ListItemText } from '@mui/material';


const DrawerList = () => { 
  return (
    <div>
      <List>
        <ListItemButton>
          <Link to="/" className='DrawerList-Text'>Home</Link>
        </ListItemButton>
      </List>
      <Divider />
      <List>
        <ListItemButton>
          <Link to="/TicTacToe" className='DrawerList-Text'>Tic Tac Toe</Link>
        </ListItemButton>
        <ListItemButton>
          <Link to="/Exollision" className='DrawerList-Text'>Exollision</Link>
        </ListItemButton>
      </List>
      <Divider />
    </div>
  );
}

function App () {
  return (
    <BrowserRouter>
      <DrawerAppBar>
        <DrawerList/>
      </DrawerAppBar>
        <Container maxWidth="l">
          <Box align="center" margin={'1%'}>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/TicTacToe" element={<TicTacToe/>} />
              <Route path="/Exollision" element={<Exollision/>} />
            </Routes>
          </Box>
        </Container>
    </BrowserRouter>
  );
}

export default App;
