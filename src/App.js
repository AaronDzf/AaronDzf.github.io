import {React, useEffect} from 'react';
import './App.css';
import {BrowserRouter, Link, Route, Routes, useLocation} from "react-router-dom";
import Home from "./Home";
import TicTacToe from "./tictactoe";
import Predictor from './fatality-predictor';

//MUI Library imports
import { DrawerAppBar, DrawerItem, PopoverItem} from './components/mui';
import { Container, Typography, styled, useMediaQuery} from '@mui/material';
import { Box, List, ListItem, ListItemButton, Divider} from '@mui/material';
import { useTheme } from '@emotion/react';


const DrawerList = (isDesktop) => {

  return (
    <div>
      <List>
        <ListItemButton>
          <Link to="/" className='DrawerList-Text'>
            <DrawerItem variant={isDesktop ? "h4" : "h5"} text="Home">
              <PopoverItem variant="body1" dialogue="true"></PopoverItem>
            </DrawerItem>
          </Link>
        </ListItemButton>
        <ListItemButton>
          <Link to="/#about-me" className='DrawerList-Text'>
            <DrawerItem variant={isDesktop ? "h4" : "h5"} text="About Me">
              <PopoverItem variant="body1" dialogue="true"></PopoverItem>
            </DrawerItem>
          </Link>
        </ListItemButton>
      </List>
      <Divider />
      <List>
        <ListItem sx={{paddingBottom:0}}>
          <Typography variant="subtitle1">Projects</Typography>
        </ListItem>
        <ListItemButton>
          <Link to="/fatality-predictor" className='DrawerList-Text'>
            <DrawerItem variant={isDesktop ? "h4" : "h5"} text="Fatality Predictor">
              {isDesktop ? 
                <PopoverItem variant="body1">Data mining report on the fatality of vehicular collisions</PopoverItem>:
                <PopoverItem variant="body1" dialogue="true"></PopoverItem>
              }
            </DrawerItem>
          </Link>
        </ListItemButton>
        <ListItemButton>
          <Link to="/tictactoe" className='DrawerList-Text'>
          <DrawerItem variant={isDesktop ? "h4" : "h5"} text="Tic-Tac-Toe">
              {isDesktop ? 
                <PopoverItem variant="body1">A simple game of Tic-tac-Toe</PopoverItem>:
                <PopoverItem variant="body1">purr</PopoverItem>
              }
          </DrawerItem>
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
          let scrollY = elem.offsetTop - header.scrollHeight
          window.scrollTo({top:scrollY,left:0, behavior:"smooth"})
        }
    } else {
    window.scrollTo({top:0,left:0, behavior: "smooth"})
    }
  }, [location,])
}

function NavBar() {
  const siteTheme = useTheme();
  const isDesktop = useMediaQuery(siteTheme.breakpoints.up("md"));

  useScroll()

  return (
    <div>
    <DrawerAppBar>
        {DrawerList(isDesktop)}
    </DrawerAppBar>
    <Container maxWidth="l" sx={{marginTop:'64px'}}>
      <Box align="center" sx={{margin:'5em 1em 2em 1em'}}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/" element={<Home/>}>{useEffect}</Route>
          <Route path="/tictactoe" element={<TicTacToe/>} />
          <Route path="/fatality-predictor" element={<Predictor/>} />
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
