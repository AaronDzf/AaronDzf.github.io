import logo from './logo.svg';
import React from 'react';
import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "./Home";
import TicTacToe from "./TicTacToe";
import Predictor from './Severity_Predictor';
import { render } from '@testing-library/react';

//MUI Library imports
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {DrawerAppBar} from './components/mui';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Typography } from '@mui/material';
import { Box, List, ListItem, ListItemIcon, ListItemButton, Divider, ListItemText } from '@mui/material';


const DrawerList = () => { 
  return (
    <div>
      <List>
        <ListItemButton>
          <Link to="/Development" className='DrawerList-Text'>
            <Typography variant="h4">Home</Typography> 
          </Link>
        </ListItemButton>
      </List>
      <Divider />
      <List>
        <ListItem sx={{paddingBottom:0}}>
          <Typography variant="subtitle1">Projects</Typography>
        </ListItem>
        <ListItemButton>
          <Link to="/Severity-Predictor" className='DrawerList-Text'>
            <Typography variant="h4">Severity Predictor</Typography>
          </Link>
        </ListItemButton>
        <ListItemButton>
          <Link to="/TicTacToe" className='DrawerList-Text'>
            <Typography variant="h4">Tic Tac Toe</Typography>
          </Link>
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
              <Route path="/Development" element={<Home/>}/>
              <Route path="/TicTacToe" element={<TicTacToe/>} />
              <Route path="/Severity-Predictor" element={<Predictor/>} />
            </Routes>
          </Box>
        </Container>
    </BrowserRouter>
  );
}

export default App;
