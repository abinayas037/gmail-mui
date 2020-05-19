import React from 'react';
import Header from './Header';
import { Grid } from '@material-ui/core';
import TabPanel from './TabPanel';



function App() {
  return (
    <div>
      <Grid container direction='column'>
        <Grid item>
         <Header />
         
        </Grid>   
      </Grid>
      <Grid container direction="row">
      <Grid item container sm={4}>
            <TabPanel/> 
          </Grid> 
      </Grid>
      
    </div>
  );
}

export default App;
