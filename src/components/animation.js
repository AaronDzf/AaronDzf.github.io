import React from 'react';
import { Typography} from '@mui/material';
import { styled } from '@mui/material/styles'
import { keyframes} from '@mui/system'


const bounce = keyframes `
    0%   { transform: scale(1,1) translateY(0); }
    10%  { transform: scale(1.1,.9) translateY(0); }
    30%  { transform: scale(.9,1.1)   translateY(-30px);}
    50%  { transform: scale(1.05,.95) translateY(0); }
    58%  { transform: scale(1,1) translateY(-7px); }
    65%  { transform: scale(1,1) translateY(0);}
    100% { transform: scale(1,1) translateY(0);}
`;

// Splits string text into spans that are individually animated with bounce
function SplitText (text,role) {
    const SpanStyled = styled('span')({});

    return(
        <span aria-label={text} role={role}>
        {text.split("").map(function(char, index){
        let delay = (0.5 + index / 10) + "s";
        return <SpanStyled
            aria-hidden="true"
            key={index}
            sx={{
                display:'inline-block',
                animation: `${bounce} 2s infinite ease`,
                animationDelay: delay
            }}
            >
            {char}
        </SpanStyled>;
        })}
        </span>
    );
}

//"animation-delay": (0.5 + index / 10) + "s"
export default function TextBounce (props) {

    return (
        <Typography variant="h2" sx = {{m: 1}}>
            {SplitText(props.text,"header")}
        </Typography>
    )
}