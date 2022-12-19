import React, {useState} from 'react';
import {Box, Button, Card, styled, Container, Typography, Table} from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'
import './App.css'
import { GalleryButton, BoxStyling } from './components/mui';
import { NavigateBefore,NavigateNext } from '@mui/icons-material';
import pdfDoc from './Assets/files/SeverityReport.pdf'

// imports for pdf viewer
import {Document, Page} from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Item(props) {
    const CardItem = styled(Card)(({ theme }) => ({
        backgroundColor: theme.palette.primary.light,
        ...theme.typography.body2,
        padding: theme.spacing(2),
        color: theme.palette.text.primary,
        fontWeight: 'Medium',
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: props.minHeight,
        maxWidth: props.maxWidth,
        }));

    return (
        <CardItem>
            {props.children}
        </CardItem>
    );
}
  
// pdf-react viewer configs
// const options = {
//   cMapUrl: 'cmaps/',
//   cMapPacked: true,
//   standardFontDataUrl: 'standard_fonts/',
// };

// image imports
function importFigures(r) {
    let images = {}
    r.keys().map((item, index) => {images[item.replace('./','')] = r(item)});
    return images
}

const images = importFigures(require.context('./Assets/images/', false, /^(?:.*\/)?CC_Figure[^\/]*\.jpg/));

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
                    file={filename} 
                    onLoadSuccess={onDocumentLoadSuccess}
                    onLoadError={console.error} 
                    // options={options}
                    className='pdfDocument'
                >
                    <Page pageNumber={pageNumber}/>
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
    };
    
    const FigureElements = (index) => {
        const FigureString = "CC_Figure" + index + ".jpg"
        return (
            <img src={images[FigureString]} alt="" width='450px' style={{display:'flex',margin:0, border:'2px solid black'}}/>
        );
    }

    // grid layout theme
    // const gridTheme = createTheme({
    //     breakpoints: {
    //         values:{
    //             test: 1000
    //         }
    //     }
    // })   

    // html elements
    return(
        <BoxStyling width='90%' height='100%' display='flex'>
            <Container maxWidth="lg" sx={{mt:4,mb:4}}>
                <Grid2 container spacing = {3}>
                    <Grid2 xs={12}>
                        <h2 className='Project-Title'>Exploring the Severity of Vehicular Collisions</h2>
                    </Grid2>
                    <Grid2 xs={12} lg={7}>
                        <Item minHeight='839px'>
                            {pdfReport(pdfDoc)}
                        </Item>
                    </Grid2>
                    <Grid2 xs={12} lg={5} style={{padding:0}}>
                        <Grid2 xs={12}>
                            <Item height='100%'>
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
                            <Item height='100%' maxWidth='483px'>
                                {FigureElements(topFigure)}
                                {FigureElements(botFigure)}
                                {GalleryButton(false,goToPrevFigure)}
                                {GalleryButton(true,goToNextFigure)}
                            </Item>
                        </Grid2>
                    </Grid2>

                </Grid2>
            </Container>
        </BoxStyling>
    );
}


export default Predictor;