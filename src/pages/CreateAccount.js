import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CreateAccountForm from '../components/CreateAccountForm';
import Controls from '../components/Controls';

const useStyles = makeStyles({
  textField: {
    margin: '15px 10px',
  },
  container: {
    margin: '0px 0px',
  },
  paper: {
    margin: '10px 0px',
    padding: '20px 20px',
  },
});

const CreateAccount = () => {
  const classes = useStyles();

  return (
    <>
      <Controls.AppBar />
      <Container>
        <Paper className={classes.paper}>
          <CreateAccountForm />
        </Paper>
      </Container>
    </>
  );
};

export default CreateAccount;
