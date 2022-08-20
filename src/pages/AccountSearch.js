import { Container, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';

import Controls from '../components/Controls';
// import SearchIcon from '@mui/icons-material/Search';

const AccountSearch = () => {
  return (
    <>
      <Controls.AppBar />
      <Container>
        <Paper>
          <Grid container>
            <Grid item xs={2}>
              BookShelfList
            </Grid>
            <Grid item xs={10}>
              <Controls.TextInput value='search' />
              <Typography className='h3'>
                BookList From Google Books API
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default AccountSearch;
