import logo from './logo.svg';
import React from 'react';
import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import TicTacToe from "./TicTacToe";
import Home from "./Home";
import { render } from '@testing-library/react';

//MUI Library imports
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {DrawerAppBar} from './components/mui';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import { Box, List, ListItem, ListItemIcon, ListItemButton, Divider, ListItemText } from '@mui/material';

//Themeing and style
const DrawerLinkStyle = {
  color:'white',
  textDecoration:'none',
}

const test = { }

const DrawerList = () => { 
  return (
    <div>
      <List>
        <ListItemButton>
          <Link to="/" class='DrawerList-Text'>Home</Link>
        </ListItemButton>
        <ListItemButton>
          <Link to="/TicTacToe" class='DrawerList-Text'>Tic Tac Toe</Link>
        </ListItemButton>
      </List>
      <Divider />
      {/* <List>
        {['Other'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </div>
  );
}

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <DrawerAppBar>
          <DrawerList/>
        </DrawerAppBar>
          <Container maxWidth="md">
            <Box align="center">
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/TicTacToe" element={<TicTacToe/>} />
              </Routes>
            </Box>
          </Container>
      </BrowserRouter>
    );
  }
}

export default App;
