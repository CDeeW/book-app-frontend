import React from 'react';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useForm, Form } from '../components/useForm';

import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  makeStyles,
  Modal,
  Paper,
} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
// import CreateAccount from '@material-ui/core/CreateAccount';
import { useState } from 'react';
import Controls from '../components/Controls';
import LogInForm from '../components/LogInForm';
import LogInModalDialog from '../components/LogInModalDialog';

const useStyles = makeStyles({
  btn: {
    margin: '15px 20px',
  },
  title: { fontSize: '70px', padding: '10px' },
});

const Home = () => {
  const [open, setOpen] = useState(false);

  let navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const classes = useStyles();
  return (
    <Container>
      <AppBar>
        <Toolbar>
          <Grid container>
            <Grid item>
              <Typography className={classes.title}>BookShelf</Typography>
            </Grid>
            <Grid item>
              <Controls.Button
                text='Sign Up'
                className={classes.btn}
                variant='contained'
                onClick={() => navigate('./createaccount')}
              >
                Sign Up
              </Controls.Button>

              <Controls.Button
                text='Log in'
                className={classes.btn}
                onClick={() => setOpen(true)}
              />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      // below the appbar
      <Grid container align='center' alignItems='center'>
        <Grid item>
          <Button />
        </Grid>
      </Grid>
      {/* Dialog */}
      <LogInModalDialog
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
      />
    </Container>
  );
};

export default Home;
