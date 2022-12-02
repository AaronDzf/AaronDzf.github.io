import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {Icon} from '@mui/material'
import {Instagram, LinkedIn, GitHub} from '@mui/icons-material'
import {Stack} from '@mui/system';
import {StackItem} from './components/mui'
import homePortrait from './images/MeMinion.png'

const platformLinks = [
  {
    platform: 'LinkedIn',
    link:'https://www.linkedin.com/in/aaron-dai/',
    icon: <LinkedIn/>,
  },
  {
    platform: 'Instagram',
    link:'https://www.instagram.com/aairond/',
    icon: <Instagram/>,
  },
  {
    platform: 'GitHub',
    link:'https://github.com/AaronDzf',
    icon: <GitHub/>,
  },
]

const PlatformMapping = platformLinks.map((platform,index) =>
  <StackItem key={index}>
    <a href={platform.link} className='icon'>
      <Icon>
        {platform.icon}
      </Icon>
    </a>
  </StackItem>
  );


class Home extends React.Component {
    render() {
      return (
        <div>
            <h1>Hello - Welcome to my portfolio!</h1>
            <div>
              <img src={homePortrait} height="350px" width="350px"/>
            </div>
            <p>
              Who am i?
            </p>
            <p style={{fontSize:'75%'}}>
              I am a newly graduated Management Engineering student from the University of Waterloo <br></br>
              I currently have 2.5 years of co-op work experience across a variety of roles including operations, data analytics, and software engineering. <br></br>
              I am passionate in applying data science and analytics to drive organizations in improving their products, clients, or operations decision making/strategies.
            </p>
            <p>
              Where am I?
            </p>
            <p style={{fontSize:'75%'}}>
              This is my personal website which I will be sharing my experiences and personal projects on<br></br>
              I have chosen this medium to learn to build a new skill (web development) but also has capacity to easily capture and display my work <br></br>
              Feel free to navigate through my projects using the sidebar toggled using the top left button or get to know me more through my platforms below
            </p>
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={10}
              justifyContent='center'
              >
              {PlatformMapping}
            </Stack>
        </div>
      );
    }
  }
  
  export default Home;