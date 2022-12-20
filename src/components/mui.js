import * as React from 'react';
import {AppBar, Button, Box, Toolbar, Typography} from '@mui/material';
import {IconButton, Menu, MenuItem, Drawer} from '@mui/material/';
import MenuIcon from '@mui/icons-material/Menu';
import { NavigateBefore,NavigateNext } from '@mui/icons-material';
import { ClickAwayListener} from '@mui/base';
import {Paper, styled} from '@mui/material'
import {Timeline,TimelineItem,TimelineContent,TimelineSeparator,TimelineConnector,TimelineOppositeContent} from '@mui/lab'

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

export function GalleryButton(isNext, changeFigure) {

  const GalleryButton = styled(IconButton)({
    width: '44px',
    height: '98%',
    background: 'none',
    borderRadius:0,
    display: 'flex',
    position:'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    size:'large',
    margin:0,
  })

  if (isNext) {
    return (
      <GalleryButton sx={{right:'-1%'}} onClick={changeFigure}>
        <NavigateNext/>
      </GalleryButton>
    );
  } else {
    return (
      <GalleryButton sx={{left:'8%'}} onClick={changeFigure}>
        <NavigateBefore/>
      </GalleryButton>
    )
  }
}

export function BoxStyling(props) {
  const BoxComponent = styled(Box)(({theme}) => ({
    width: props.width,
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