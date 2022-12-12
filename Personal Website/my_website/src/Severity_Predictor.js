import React, {useState} from 'react';
import {Box, Button, Paper, styled, Container, Typography} from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'
import './App.css'
import { GalleryButton } from './components/mui';
import { NavigateBefore,NavigateNext } from '@mui/icons-material';

// imports for pdf viewer
import { Document, Page} from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.primary.dark,
    ...theme.typography.body2,
    padding: theme.spacing(2),
    color: theme.palette.text.primary,
    fontWeight: 'Medium',
    position: 'relative',
    width: '100%',
    height: '100%',
  }));
  
// pdf-react viewer configs
const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
  standardFontDataUrl: 'standard_fonts/',
};

const severityReport = '/SeverityReport.pdf';

// image imports
function importFigures(r) {
    let images = {}
    r.keys().map((item, index) => {images[item.replace('./','')] = r(item)});
    return images
}

const images = importFigures(require.context('./Assets/images/', false, /^(?:.*\/)?CC_Figure[^\/]*\.jpg/));
console.log(images["CC_Figure1.jpg"])

function Predictor () {

    // pdf viewer generator
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    
    function onDocumentLoadSuccess({numPages}) {
        setNumPages(numPages);
    }
    
    const goToPrevPage = () =>
        setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

    const goToNextPage = () =>
        setPageNumber(
            pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
    );

    const pdfReport = (filename) => {
        return (
            <div>
                <Document 
                    file={severityReport} 
                    onLoadSuccess={onDocumentLoadSuccess} 
                    options={options}
                    className='pdfDocument'
                >
                    <Page pageNumber={pageNumber} style={{position:'relative'}}/>
                    <div className="page-controls">
                        <button onClick={goToPrevPage}><NavigateBefore/></button>
                        <span>
                            Page {pageNumber} of {numPages}
                        </span>
                        <button onClick={goToNextPage}><NavigateNext/></button>
                    </div>
                </Document>
            </div>
        );
    }

    // image gallery generator
    const [topFigure, setTopFigure] = useState(1);
    const [botFigure, setBotFigure] = useState(2);
    const gallerySize = Object.keys(images).length;
    
    const goToPrevFigure = () => {
        setTopFigure(topFigure - 2 < 1 ? 1 : topFigure - 2);
        setBotFigure(botFigure - 2 < 2 ? 2 : botFigure - 2);
    };

    const goToNextFigure = () => {
        setTopFigure(topFigure + 2 > gallerySize ? topFigure : topFigure + 2);
        setBotFigure(botFigure + 2 > gallerySize ? botFigure : botFigure + 2);
        console.log(gallerySize)
    };
    
    const FigureElements = (index) => {
        const FigureString = "CC_Figure" + index + ".jpg"
        return (
            <img src={images[FigureString]} alt="" width='450px' style={{display:'flex',margin:0, border:'2px solid black'}}/>
        );
    }

    // html elements
    return(
        <Box className='Project-Box'>
            <Container maxWidth="lg" sx={{mt:4,mb:4}}>
                <Grid2 container spacing = {2}>
                    <Grid2 xs={12} md={12}>
                        <h2 className='Project-Title'>Exploring the Severity of Vehicular Collisions</h2>
                    </Grid2>
                    <Grid2 xs={12} md={7}>
                        <Item>
                            {pdfReport(severityReport)}
                        </Item>
                    </Grid2>
                    <Grid2 container direction="column" md={5}>
                        <Grid2 xs={12}>
                            <Item>
                                <Typography variant="h5">Summary</Typography>
                                <Typography variant="body2">
                                This paper was written for coursework applying data mining and machine learning introductory techniques.
                                The topic is an investigation on the severity of vehicular collisions in Canada &#40;STATSCAN, 2017&#41;.
                                A variety of factors were compared including time, weather conditions, parties involved, collision type,
                                road type, intersection, etc. I primarily worked on exploratory data analysis and building a logistic 
                                regression model to identify key factors in predicting severity of a collision.
                                </Typography>
                            </Item>
                        </Grid2>
                        <Grid2 xs={12}>
                            <Item>
                                {FigureElements(topFigure)}
                                {FigureElements(botFigure)}
                                {GalleryButton(false,goToPrevFigure)}
                                {GalleryButton(true,goToNextFigure)}
                            </Item>
                        </Grid2>
                    </Grid2>

                </Grid2>
            </Container>
        </Box>
    );
}


export default Predictor;