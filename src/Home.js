import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {SvgIcon, Typography, Container} from '@mui/material'
import {Instagram, LinkedIn, GitHub} from '@mui/icons-material'
import {Stack} from '@mui/system';
import {StackItem, BoxStyling} from './components/mui'
import homePortrait from './Assets/images/MeMinion.png'
import TextAnimation from './components/animation';

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
      <SvgIcon fontSize='large' sx={{mt:'2px', mx:'1px', color:'black'}}>
        {platform.icon}
      </SvgIcon>
    </a>
  </StackItem>
  );


class Home extends React.Component {
    render() {
      return (
        <div>
          <section id='front'>
            <TextAnimation text="↑↑↑"/>
            <Typography variant="h3" sx={{mt:1,mb:15}}>
                  Start
            </Typography>
            <div className='portrait'>
              <img src={homePortrait} height="350px" width="350px" alt='dp'/>
            </div>
          </section>
          <section id='about-me'>
            <BoxStyling width='75%' height='100%' padding='30px'>
              <Container>
                <Typography variant="h3">
                  Who am i?
                </Typography>
                <Typography variant="body1" sx={{m:5}}>
                  I am a newly graduated Management Engineering student from the University of Waterloo <br></br>
                  I currently have 2.5 years of co-op work experience across a variety of roles including operations, data analytics, and software engineering.
                  I am passionate in applying data science and analytics to drive organizations in improving their products, clients, or operations decision making/strategies.
                </Typography>
                <Typography variant="h3" sx={{m:5}}>              
                  Where am I?
                </Typography>
                <Typography variant="body1" sx={{m:5}}>
                  This is my personal website which I will be sharing my experiences and personal projects on<br></br>
                  I am currently learning React to build my web dev skills to display my previous and current work <br></br>
                  Feel free to navigate through my projects by clicking my name at the top or get to know me more through my platforms below
                </Typography>
                <Stack 
                direction='row'
                spacing={10}
                justifyContent='center'
                >
                {PlatformMapping}
                </Stack>
              </Container>
            </BoxStyling>
          </section>
        </div>
      );
    }
  }
  
  export default Home;