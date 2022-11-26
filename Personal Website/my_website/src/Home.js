import React from 'react';
import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {Box} from '@mui/material'


class Home extends React.Component {
    render() {
      return (
        <body>
            <h1>Hello - Welcome to my playground!</h1>
        </body>
      );
    }
  }
  
  export default Home;