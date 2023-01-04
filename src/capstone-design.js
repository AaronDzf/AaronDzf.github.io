import React from 'react';
import {Container, Typography, Collapse, Button} from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'
import { BoxStyling, ProjectCard, Gallery, SectionButton, ImageTooltips } from "./components/mui";
import './App.css';
import { importImages, YoutubeEmbed } from './components/utility';

const images = importImages(require.context('./Assets/images/capstone/', false, /^(?:.*\/)?capstone-[^\/]*\.png/));
const galleryList_models = [ 
    <img id="gallery-capstone" src={images["capstone-modelsimple.png"]} alt="capstone-modelsimple" width='650px' height='auto'/>,
    <img id="gallery-capstone" src={images["capstone-modelfull.png"]} alt="capstone-modelfull" width='650px' height='auto'/>
]

const galleryList_figuresamples = [ 
    <img id="gallery-capstone" src={images["capstone-figuresample1.png"]} alt="capstone-figuresample1" width='470px' height='auto'/>,
    <img id="gallery-capstone" src={images["capstone-figuresample2.png"]} alt="capstone-figuresample2" width='470px' height='auto'/>,
    <img id="gallery-capstone" src={images["capstone-figuresample3.png"]} alt="capstone-figuresample3" width='470px' height='auto'/>,
    <img id="gallery-capstone" src={images["capstone-figuresample4.png"]} alt="capstone-figuresample4" width='470px' height='auto'/>,
]

function Capstone () {
    const [isMoreSelected, setIsMoreSelected] = React.useState(false);

    const handleCollapse = () => {
        setIsMoreSelected((prev) => !prev);
    }

    return(
        <BoxStyling width='90%' height='100%' display='flex'>
            <Container maxWidth="lg" sx={{mt:4,mb:4}}>
                <Grid2 container spacing = {3}>
                    <Grid2 xs={12}>
                        <h2 className='Project-Title'>Capstone Design Project - BESST</h2>
                    </Grid2>
                    <Grid2 xs={12} lg={7}>
                        <ProjectCard height='100%'>
                            <YoutubeEmbed width='100%' height='100%' embedId="jlcd-_b6teo"/>
                        </ProjectCard>
                    </Grid2>
                    <Grid2 xs={12} lg={5} >
                        <ProjectCard height='100%'>
                            <Typography variant="h5">Summary</Typography>
                            <Typography variant="body1" sx={{textAlign:{xs:'left',m:'center'}}}>
                            Capstone Design is an 8 month long design project showcasing Engineering student's solutions to real world problems.
                            Our team designed a web application platform to help Ontario home owners learn about the benefits of home energy storage
                            technology. <br></br>
                            The application generated customized infographics using information from a homeowner's energy bill to display
                            visualizations of their potential cost-savings, greenhouse gas emission reduction, and power outage mitigation
                            using home energy storage technology. <br></br>
                            My main role was the lead Analyst in which I built the optimization model to transform user energy data into useful insights.
                            More details can be found below in the sample works card.
                            </Typography>
                        </ProjectCard>
                    </Grid2>
                    
                    <Grid2 xs={12}>
                        <ProjectCard height='100%'>
                        <Typography variant="h5">Work Samples</Typography>
                        <Grid2 container>
                            <Grid2 xs={12} lg={7}>
                                <ImageTooltips title="Homepage of website">
                                    <img id="gallery-capstone" src={images["capstone-homepage.png"]} alt="capstone-home"
                                    width='650px'/>
                                </ImageTooltips>
                                <ImageTooltips title="Sample infographic results - cost reduction & Greenhouse gases reduction">
                                    <img id="gallery-capstone" src={images["capstone-sampleresults.png"]} alt="capstone-sampleresults"
                                    width='365px'/>
                                </ImageTooltips>
                                <ImageTooltips title="Sample infographic results - reliability">
                                    <img id="gallery-capstone" src={images["capstone-reliabilityfigure.png"]} alt="capstone-reliabilityfigure"
                                    width='276px'/>
                                </ImageTooltips>
                            </Grid2>
                            <Grid2 xs={12} lg={5}>
                                <ImageTooltips title="Website Input Form (Requests energy bill information and geographic location of users)">
                                    <img id="gallery-capstone" src={images["capstone-inputform.png"]} alt="capstone-inputform"
                                    width='420px'/>
                                </ImageTooltips>
                            </Grid2>
                            <SectionButton onClick={handleCollapse}>See More</SectionButton>
                            <Grid2 container>
                                <Grid2 xs={12} lg={7}>
                                    <Collapse in={isMoreSelected}>
                                    <Typography variant="h6">Solution Design</Typography>
                                    <ImageTooltips title="Solution architecture">
                                        <img id="gallery-capstone" src={images["capstone-architecture.png"]} alt="capstone-architecture"
                                        width='650px'/>
                                    </ImageTooltips>
                                    <ImageTooltips title="Optimization model flow diagram">
                                        {Gallery(galleryList_models)}
                                    </ImageTooltips>
                                    </Collapse>
                                </Grid2>
                                <Grid2 xs={12} lg={5}>
                                    <Collapse in={isMoreSelected}>
                                    <Typography variant="h6">Sample Results Assesments</Typography>
                                    <ImageTooltips title="Comparisons of Cost Savings & Greenhouse Gas Reductions Sample Results - Detailed">
                                        {Gallery(galleryList_figuresamples)}
                                    </ImageTooltips>
                                    <ImageTooltips title="Sample Results of Estimated Electricity Usage">
                                        <img id="gallery-capstone" src={images["capstone-verifymodel.png"]} alt="capstone-verifymodel"
                                        width='470px'/>
                                    </ImageTooltips>
                                    </Collapse>
                                </Grid2>
                            </Grid2>
                        </Grid2>
                        </ProjectCard>
                    </Grid2>
                </Grid2>
            </Container>
        </BoxStyling>
    );
}


export default Capstone;