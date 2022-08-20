import {
  Box,
  AppBar as MuiAppBar,
  IconButton,
  Toolbar,
  Typography,
  Button,
} from '@material-ui/core';
import React from 'react';

const AppBar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <MuiAppBar position='static'>
          <Toolbar>
            {/* <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton> */}
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              BookShelf
            </Typography>
            <Button color='inherit'>Login</Button>
          </Toolbar>
        </MuiAppBar>
      </Box>
    </div>
  );
};

export default AppBar;
