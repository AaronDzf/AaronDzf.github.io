import {React, useEffect} from 'react';
import './App.css';
import {BrowserRouter, Link, Route, Routes, useLocation} from "react-router-dom";
import Home from "./Home";
import TicTacToe from "./TicTacToe";
import Predictor from './Severity_Predictor';

//MUI Library imports
import {DrawerAppBar} from './components/mui';
import { Container, Typography } from '@mui/material';
import { Box, List, ListItem, ListItemButton, Divider} from '@mui/material';


const DrawerList = () => { 
  return (
    <div>
      <List>
        <ListItemButton>
          <Link to="/Development" className='DrawerList-Text'>
            <Typography variant="h4">Home</Typography> 
          </Link>
        </ListItemButton>
        <ListItemButton>
          <Link to="/Development#about-me" className='DrawerList-Text'>
            <Typography variant="h4">About Me</Typography> 
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

function useScroll() {
  let location = useLocation();

  useEffect(()=> {
    if (location.hash) {
        let header = document.getElementById('app-bar')
        let elem = document.getElementById(location.hash.slice(1))
        if (elem && header) {
          let scrollY = elem.scrollHeight - header.scrollHeight
          window.scrollTo({top:scrollY,left:0, behavior:"smooth"})
        }
    } else {
    window.scrollTo({top:0,left:0, behavior: "smooth"})
    }
  }, [location,])
}

function NavBar() {
  useScroll()

  return (
    <div>
    <DrawerAppBar>
        <DrawerList/>
    </DrawerAppBar>
    <Container maxWidth="l" sx={{marginTop:'64px'}}>
      <Box align="center" sx={{margin:'5em 1em 2em 1em'}}>
        <Routes>
          <Route path="/Development" element={<Home/>}/>
          <Route path="/Development" element={<Home/>}>{useEffect}</Route>
          <Route path="/TicTacToe" element={<TicTacToe/>} />
          <Route path="/Severity-Predictor" element={<Predictor/>} />
        </Routes>
      </Box>
    </Container>
    </div>
  );
}

function App () {
  
  return (
    <BrowserRouter>
      <NavBar/>
    </BrowserRouter>
  );
}

export default App;
