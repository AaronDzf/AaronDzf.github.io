import {React, useEffect} from 'react';
import './App.css';
import {BrowserRouter, Link, Route, Routes, useLocation} from "react-router-dom";
import Home from "./Home";
import TicTacToe from "./tictactoe";
import Predictor from './fatality-predictor';


//MUI Library imports
import {DrawerAppBar, DrawerItem} from './components/mui';
import { Container, Typography,styled} from '@mui/material';
import { Box, List, ListItem, ListItemButton, Divider} from '@mui/material';


const DrawerList = () => {

  const PopoverItem = styled(Typography)(({theme}) => ({
    background: theme.palette.secondary.dark,
    padding: theme.spacing(2),
  }));

  return (
    <div>
      <List>
        <ListItemButton>
          <Link to="/Development" className='DrawerList-Text'>
          <DrawerItem variant="h4" text="Home">
              <PopoverItem variant="body1">Moew</PopoverItem>
            </DrawerItem>
          </Link>
        </ListItemButton>
        <ListItemButton>
          <Link to="/Development#about-me" className='DrawerList-Text'>
            <DrawerItem variant="h4" text="About Me">
              <PopoverItem variant="body1">Purr</PopoverItem>
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
            <DrawerItem variant="h4" text="Fatality Predictor">
              <PopoverItem variant="body1">Data mining report on the fatality of vehicular collisions</PopoverItem>
            </DrawerItem>
          </Link>
        </ListItemButton>
        <ListItemButton>
          <Link to="/tictactoe" className='DrawerList-Text'>
          <DrawerItem variant="h4" text="Tic-Tac-Toe">
              <PopoverItem variant="body1">A simple game of tictactoe</PopoverItem>
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
        console.log(elem)
        if (elem && header) {
          let scrollY = elem.offsetTop - header.scrollHeight
          console.log(elem)
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
