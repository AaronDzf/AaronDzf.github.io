import logo from './logo.svg';
import React from 'react';
import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Tutorial_tictactoe from "./Tutorial_tictactoe";
import Home from "./Home";
import { render } from '@testing-library/react';

//MUI Library imports
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {DrawerAppBar} from './components/mui';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import { Box, List, ListItem, ListItemIcon, ListItemButton, Divider, ListItemText } from '@mui/material';

//Themeing and style

const DrawerList = () => { 
  return (
    <div>
      <List>
        <ListItemButton>
          <Link to="/">
            <ListItemText primary = "Home"></ListItemText>
          </Link>
        </ListItemButton>
        <ListItemButton>
          <Link to="/Tutorial_tictactoe">
            <ListItemText primary = "Learning Playground"></ListItemText>
          </Link>
        </ListItemButton>
      </List>
      <Divider />
      <List>
        {['Other'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
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
          <Container maxWidth="sm">
              <h1>Hi - Welcome to my playground!</h1>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Tutorial_tictactoe" element={<Tutorial_tictactoe/>} />
              </Routes>
            </Container>
      </BrowserRouter>
    );
  }
}

export default App;
