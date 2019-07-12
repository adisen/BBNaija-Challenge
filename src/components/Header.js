import React from 'react'
import {AppBar, Toolbar, Typography} from '@material-ui/core';

function Header() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography 
            variant="h5" 
            color="inherit" 
            align="center" >
            BBN Challenge
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;
