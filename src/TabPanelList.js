import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import InboxSharpIcon from '@material-ui/icons/InboxSharp';


function TabPanel(props) {
  const { children, value, index, ...other } = props;
  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '500',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function FullWidthTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="center" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab 
           indicatorColor="primary"
           textColor="primary"
           icon={<InboxSharpIcon />}
           label="Primary" {...a11yProps(0)} />
         
          <Tab 
            indicatorColor="primary"
            textColor="primary"
            icon={<SupervisorAccountIcon/>} 
            label="Social" {...a11yProps(1)} />
           
          <Tab 
            indicatorColor="primary"
            textColor="primary"
            icon={<LocalOfferIcon />} 
            label="Promotions" {...a11yProps(2)} />
          

        </Tabs>
      </AppBar>
     
    </div>
  );
}
