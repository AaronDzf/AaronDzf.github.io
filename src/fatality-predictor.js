import React, {useState} from 'react';
import {Card, styled, Container, Typography} from '@mui/material'
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
        minWidth: props.minWidth,
        maxWidth: props.maxWidth,
        }));

    return (
        <CardItem>
            {props.children}
        </CardItem>
    );
}

function DocumentContainer(props) {
    const DocContainer = styled(Container)(({ theme }) => ({
        padding: theme.spacing(0),
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translateX(-50%) translateY(-50%)',
        border: '3px solid rgba(0, 0, 0, 0.5)',
        boxShadow: '0 30px 40px 0 rgba(16, 36, 94, 0.2)',
        width:'max-content',
    }));

    return (
        <DocContainer disableGutters>
            {props.children}
        </DocContainer>
    );
}

// pdf-react viewer configs
const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
  standardFontDataUrl: 'standard_fonts/',
};

// image imports
function importFigures(r) {
    let images = {}
    r.keys().map((item, index) => {images[item.replace('./','')] = r(item)});
    return images
}

const images = importFigures(require.context('./Assets/images/', false, /^(?:.*\/)?CC_Figure[^\/]*\.jpg/));

function PDFViewer() {
    // pdf viewer generator
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({numPages}) {
        setNumPages(numPages);
    }
    
    function changePage(offset) {
        setPageNumber((prevPageNumber) => prevPageNumber + offset);
    }

    function goToPrevPage() {
        changePage(-1)
    }

    function goToNextPage() {
        changePage(1)
    }

    function loadingImg() {
        return (
            <div position='relative'>
                <img src={images["CC_Figure16.jpg"]} alt="" width='450px'
                style={{position:'absolute', top:'50%', left:'50%', transform: 'translateX(-50%) translateY(-50%)',
                border:'3px solid rgba(0, 0, 0, 0.5)'}}/>
            </div>
            
        )
    }

    const pdfReport = (filename) => {
        return (
            <DocumentContainer>
                <Document
                    file={filename} 
                    onLoadSuccess={onDocumentLoadSuccess}
                    onLoadError={console.error}
                    options={options}
                    loading={loadingImg}
                >
                    <Page 
                        key={pageNumber}
                        pageNumber={pageNumber}
                        renderAnnotationLayer={false}
                        
                        height={770}
                        width={595}
                    />
                    <div className="page-controls">
                        <button disabled={pageNumber <= 1} onClick={goToPrevPage}><NavigateBefore/></button>
                        <span>
                            Page {pageNumber} of {numPages}
                        </span>
                        <button disabled={pageNumber >= numPages} onClick={goToNextPage}><NavigateNext/></button>
                    </div>
                </Document>
            </DocumentContainer>
        );
    }

    return (
        pdfReport(pdfDoc)
    )
}

function Gallery() {
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
            <img src={images[FigureString]} alt="" width='450px' style={{display:'flex',margin:0, border:'3px solid rgba(0, 0, 0, 0.5)'}}/>
        );
    }
    
    return (
        <React.Fragment>
            {FigureElements(topFigure)}
            {FigureElements(botFigure)}
            {GalleryButton(false,goToPrevFigure)}
            {GalleryButton(true,goToNextFigure)}
        </React.Fragment>
        
    )
}


function Predictor () {
    return(
        <BoxStyling width='90%' height='100%' display='flex'>
            <Container maxWidth="lg" sx={{mt:4,mb:4}}>
                <Grid2 container spacing = {3}>
                    <Grid2 xs={12}>
                        <h2 className='Project-Title'>Exploring the Fatality of Vehicular Collisions</h2>
                    </Grid2>
                    <Grid2 xs={12} lg={7}>
                        <Item minHeight='797px' minWidth='570px'>
                            <PDFViewer/>
                        </Item>
                    </Grid2>
                    <Grid2 xs={12} lg={5} style={{padding:0}}>
                        <Grid2 xs={12}>
                            <Item height='100%'>
                                <Typography variant="h5">Summary</Typography>
                                <Typography variant="body2">
                                This academic coursework paper is an application of data mining techniques to investigate possible factors of fatality 
                                accidents in vehicular collisions. Using a dataset from &#40;STATSCAN, 2017&#41;, A fitted logistic regression
                                model was used to predict the fataility of person&#40;s&#41; in a collision based on significant factors 
                                screened out after an intial exploratory analysis phase.
                                </Typography>
                            </Item>
                        </Grid2>
                        <Grid2 xs={12}>
                            <Item height='100%' maxWidth='483px'>
                                <Gallery/>
                            </Item>
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Container>
        </BoxStyling>
    );
}


export default Predictor;