import logo from './logo.svg';
import React from 'react';
import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Tutorial_tictactoe from "./Tutorial_tictactoe";
import Home from "./Home";
import { render } from '@testing-library/react';

class App extends React.Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
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
    );
  }
}

export default App;
