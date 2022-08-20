import { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import LogInForm from './LogInForm';
import Controls from '../components/Controls';
import Account from '../pages/Account';
import { useNavigate } from 'react-router-dom';

const LogInModalDialog = ({ open, setOpen, handleClose }) => {
  let navigate = useNavigate();

  const handleSubmit = () => {
    console.log('submit');
    navigate('./account');
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Log In</DialogTitle>
      <DialogContent>
        <DialogContentText>Enter your details to log in</DialogContentText>
        <LogInForm />
      </DialogContent>
      <DialogActions>
        <Controls.Button onClick={handleClose} text='Cancel' />
        <Controls.Button onClick={handleSubmit} text='Log In' />
      </DialogActions>
    </Dialog>
  );
};

export default LogInModalDialog;
