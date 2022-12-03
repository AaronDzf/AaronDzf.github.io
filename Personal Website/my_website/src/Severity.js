import React, {useState} from 'react';
import {Box, Paper, styled, Container} from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'
import './App.css'

// imports for pdf viewer
import { Document, Page} from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#737373',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
// pdf-react viewer configs
const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
  standardFontDataUrl: 'standard_fonts/',
};

const severityReport = '/SeverityReport.pdf';

function Severity () {

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
                        <button onClick={goToPrevPage}>&lt;</button>
                        <span>
                            Page {pageNumber} of {numPages}
                        </span>
                        <button onClick={goToNextPage}>&gt;</button>
                    </div>
                </Document>
            </div>
        );
    }

    // html elements
    return(
        <Box className='Project-Box'>
            <Container maxWidth="lg" sx={{mt:4,mb:4}}>
                <Grid2 container spacing = {2}>
                    <Grid2 xs={12} md={12}>
                        <h2 className='Project-Title'>Review on Severity of Vehicular Collisions</h2>
                    </Grid2>
                    <Grid2 xs={12} md={7}>
                        <Item>
                            {pdfReport(severityReport)}
                        </Item>
                    </Grid2>
                    <Grid2 container direction="column" md={5}>
                        <Grid2 xs={12} md={12}>
                            <Item>
                                Summary <br></br>
                                This paper was written for coursework applying data mining and machine learning introductory techniques.
                                The topic is an investigation on the severity of vehicular collisions in Canada &#40;STATSCAN, 2017&#41;.
                                A variety of factors were compared including time, weather conditions, parties involved, collision type,
                                road type, intersection, etc. I primarily worked on applying a logistic regression model to identify
                                key factors in severe collisions.
                            </Item>
                        </Grid2>
                        <Grid2 xs={12} md={12}>
                            <Item>
                                Placeholder
                            </Item>
                        </Grid2>
                    </Grid2>

                </Grid2>
            </Container>
        </Box>
    );
}


export default Severity;