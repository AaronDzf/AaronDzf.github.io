import * as React from 'react';
import {AppBar, Button, Box, Toolbar, Typography, IconButton, Menu, MenuItem, Drawer, Card} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavigateBefore,NavigateNext } from '@mui/icons-material';
import { ClickAwayListener} from '@mui/base';
import {Paper, styled, Popover, Container, Tooltip} from '@mui/material'
import {Timeline,TimelineItem,TimelineContent,TimelineSeparator,TimelineConnector,TimelineOppositeContent} from '@mui/lab'
import IndicatorImg from '../Assets/images/catpopover.png'

export function DropButtonAppBar() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>Project 1</MenuItem>
              <MenuItem onClick={handleClose}>Project 2</MenuItem>
              <MenuItem onClick={handleClose}>Project 3</MenuItem>
            </Menu>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Home Page
            </Typography>
            <Button color="inherit">Bwah</Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }

export function DrawerAppBar({children}) {
const [isOpen, setisOpen] = React.useState(false)

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setisOpen(open)
  };

  return (
    <div>
      <AppBar position="fixed" top='0' sx={{minHeight:'64px'}} id='app-bar'>
          <Toolbar 
            sx={{":hover":{background:(theme) => theme.palette.primary.light, cursor: "pointer"}}} 
            onClick={toggleDrawer(true)}>
            <Drawer
              PaperProps={{
                sx: {
                  overflowY:'visible'
                }
              }}
              open={isOpen}
              onClose={toggleDrawer(false)}>
              <ClickAwayListener onClickAway={toggleDrawer(false)}>
                <Box
                  role="presentation"
                  onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}
                >
                  {children}
                </Box>
              </ClickAwayListener>
            </Drawer>
            <Typography variant="h3" style={{width:'100%', textAlign:'center'}}>AARON DAI</Typography>
          </Toolbar>
        </AppBar>
    </div>
  );
}

export function StackItem({children}) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.light,
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <Item>
      {children}
    </Item>
  )
}

export function Gallery(imageArray) {
  const [imgNumber, setImgNumber] = React.useState(0);
  const GallerySize = imageArray.length;

  const NextImg = () => {
    if (imgNumber < GallerySize-1) {
      setImgNumber(imgNumber + 1)
    } else {
      return null;
    }
  }

  const PrevImg = () => {
    if (imgNumber > 0) {
      setImgNumber(imgNumber - 1)
    } else {
      return null;
    }
  }
  

  return (
    <Container disableGutters sx={{position:'relative','&:hover .gallery-button': {opacity: 1}}}>
        {imageArray[imgNumber]}
          {GalleryButton(true, NextImg)}
          {GalleryButton(false, PrevImg)}
    </Container>
    
)
}

export function GalleryButton(isNext, changeFigure) {

  const GalleryButton = styled(IconButton)({
    width: '10%',
    height: '98%',
    background: 'none',
    borderRadius:0,
    display: 'flex',
    position:'absolute',
    padding:0,
    top: '50%',
    transform: 'translate(0%, -50%)',
    size:'large',
    margin:0,
    opacity:0,
  })

  if (isNext===true) {
    return (
      <GalleryButton className='gallery-button' sx={{right:0}} onClick={changeFigure}>
        <NavigateNext/>
      </GalleryButton>
    );
  } else {
    return (
      <GalleryButton className='gallery-button' onClick={changeFigure}>
        <NavigateBefore/>
      </GalleryButton>
    )
  }
}

export function BoxStyling(props) {
  const BoxComponent = styled(Box)(({theme}) => ({
    width: '100%', [theme.breakpoints.up("md")]: {width: props.width},
    height: props.height,
    display: props.display,
    padding: props.padding,
    backgroundColor: theme.palette.primary.main, 
    position: 'relative', 
    marginTop: '30px',
    marginBottom: '30px',
    borderRadius: 1, 
    boxShadow: "3px 3px 3px #b37100",
    justifyContent: 'center',
    alignProperty: 'center',
  }));

  return (
    <BoxComponent>
      {props.children}
    </BoxComponent>
  )
}

export function TimelineComponent() {

  return (
    <Timeline>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body1">Research Assistant</Typography>
          <Typography variant="body2">University of Waterloo</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <Typography variant="h6">2017</Typography>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="body1">Operational Support</Typography>
          <Typography variant="body2">Lafarge</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body1">Program Support Assistant</Typography>
          <Typography variant="body2">Ministry of Environment</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <Typography variant="h6">2018</Typography>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body1">Master Data Analyst</Typography>
          <Typography variant="body2">HubHead Corp</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <Typography variant="h6">2019</Typography>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body1">Research Assistant</Typography>
          <Typography variant="body2">University of Waterloo</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <Typography variant="h6">2020</Typography>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body1">Associate Software Engineer</Typography>
          <Typography variant="body2">BMO</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <Typography variant="h6">2021</Typography>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="body1">Consumer Insights Analyst</Typography>
          <Typography variant="body2">Loblaws LLC</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body1">Graduated!</Typography>
          <Typography variant="body2">University of Waterloo</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <Typography variant="h6">2022</Typography>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        </TimelineContent>
      </TimelineItem>
      <Typography variant="h6">2023</Typography>
    </Timeline>
    
  )
}

export function DrawerItem(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isSelected, setIsSelected] = React.useState(false);
  const [dialogueIndex, setDialogueIndex] = React.useState(1);
 
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget)
    setIsSelected(true)
    chooseDialogue();
  };

  const handlePopoverClose = () => {
    setAnchorEl(null)
    setIsSelected(false)
  };

  const chooseDialogue = () => {
    var index = Math.floor(Math.random()*8)
    setDialogueIndex(index)
  }

  const PopoverProps = React.Children.map(props.children, (child) =>
    React.cloneElement(child, {dialogueindex:dialogueIndex})
  )

  const open = Boolean(anchorEl);
  return (
    <React.Fragment>
      <Typography variant={props.variant}
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        {props.text}
      </Typography>
      <React.Fragment>
      { isSelected ?
        <img src={IndicatorImg}
        alt="menu-indicator"
        style={{position:'absolute',left:anchorEl ? anchorEl.offsetWidth + 15 : 0,top:'0px'}}
        ></img> 
      : null}
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'center',
          horizontal: anchorEl ? anchorEl.offsetWidth + 65 : 0,
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        {/* {props.children} */}
        {PopoverProps}
      </Popover>
      </React.Fragment>
    </React.Fragment>
  ) 
}

export function PopoverItem(props) {
  const PopoverComponent = styled(Typography)(({theme}) => ({
    background: theme.palette.secondary.dark,
    padding: theme.spacing(2),
  }));

  const hoverDialogue = ['meow','purr','mew','hiss','growl','chirp','yowl','snarl','trill'];

  return (
    <PopoverComponent variant='body1'>
      {props.dialogue ? hoverDialogue[props.dialogueindex]:props.children}
    </PopoverComponent>
  )
  
}


export function ProjectCard(props) {
  const CardItem = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    ...theme.typography.body2,
    padding: theme.spacing(2),
    color: theme.palette.text.primary,
    fontWeight: 'Medium',
    position: 'relative',
    width: '100%',
    height: '100%',
    minHeight: 'auto',
    minWidth: 'auto',
    maxWidth: 'auto',
    [theme.breakpoints.up("sm")]: {
        minHeight: props.minHeight,
        minWidth: props.minWidth,
        maxWidth: props.maxWidth
    },
    }));

  return (
      <CardItem>
          {props.children}
      </CardItem>
  );
}

export function SectionButton(props) {

  const ButtonComponent = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.lightcontrast,
    ...theme.typography.h5,
    padding: 0,
    color: theme.palette.text.primary,
    position: 'relative',
    width: '100%',
    height: '100%',
    ":hover": {backgroundColor:theme.palette.secondary.dark}
    }));

  return (
      <ButtonComponent onClick={props.onClick}>
          {props.children}
      </ButtonComponent>
  );
}

export function ImageTooltips(props) {

  return (
    <Tooltip title={props.title} followCursor>
      {props.children}
    </Tooltip>
  )
}