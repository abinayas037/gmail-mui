import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MailTwoToneIcon from '@material-ui/icons/MailTwoTone';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import InboxSharpIcon from '@material-ui/icons/InboxSharp';
import SendIcon from '@material-ui/icons/Send';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import DraftsIcon from '@material-ui/icons/Drafts';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';
import DataList from './DataList';
import TabPanelList from './TabPanelList';
import Avatar from '@material-ui/core/Avatar';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: (theme.palette.orange)
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: theme.spacing(6),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(100)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    marginRight: theme.spacing(0),
    [theme.breakpoints.up('sm')]: {
      width: '0ch',
      '&:focus': {
        width: '10ch',
       
      },
    },
  },
  avatarIcon: {
    edge:"end",
    marginLeft: theme.spacing(30),
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  mailIcon: {
    marginRight: theme.spacing(8),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0),
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
        <IconButton 
           align="center"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            size="medium" 
          >
            <MenuIcon />
          </IconButton >
          <Typography variant="h4" className={classes.mailIcon} noWrap>
          <MailTwoToneIcon  size="Medium"/>
            SMail
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        <Avatar className={classes.avatarIcon} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          
              
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
         
          <List>
           
              <ListItem button>
                <ListItemIcon>
                  <InboxSharpIcon />
                </ListItemIcon>
                <ListItemText id="switch-list-label-inboxsharpicon" primary="Inbox"/>
              </ListItem>
          
              <ListItem button>
                <ListItemIcon>
                  <StarBorderIcon/>
                </ListItemIcon>
                <ListItemText id="switch-list-label-inboxsharpicon" primary="Starred"/>
              </ListItem>

              <ListItem button>
                <ListItemIcon>
                  <SendIcon  />
                </ListItemIcon>
                <ListItemText id="switch-list-label-inboxsharpicon" primary="Sent"/>
              </ListItem>

              <ListItem button>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText id="switch-list-label-inboxsharpicon" primary="Drafts"/>
              </ListItem>
          </List>
          <Divider />
          <List>
          <ListItem button>
                <ListItemIcon>
                  <MailIcon/>
                </ListItemIcon>
                <ListItemText id="switch-list-label-inboxsharpicon" primary="All Mail"/>
              </ListItem>

              <ListItem button>
                <ListItemIcon>
                  <DeleteIcon/>
                </ListItemIcon>
                <ListItemText id="switch-list-label-inboxsharpicon" primary="Trash"/>
              </ListItem>

              <ListItem button>
                <ListItemIcon>
                  <ReportIcon />
                </ListItemIcon>
                <ListItemText id="switch-list-label-inboxsharpicon" primary="Spam"/>
              </ListItem>
           
          </List>
        </div>
      </Drawer>   
      <main className={classes.content}>
       
        <Toolbar />
          <TabPanelList />
          <DataList />
      </main>         
    </div>
  );
}
