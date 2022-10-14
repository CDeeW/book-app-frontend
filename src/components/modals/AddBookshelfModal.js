import { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import AddBookshelfForm from '../forms/AddBookshelfForm';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import LogInForm from '../forms/LogInForm';
import Controls from '../Controls';
import AccountBookshelf from '../../pages/AccountBookshelf';
import { useNavigate } from 'react-router-dom';

const AddBookshelfModal = ({ open, setOpen, handleClose }) => {
  let navigate = useNavigate();

  const handleSubmit = () => {
    console.log('submit');
    navigate('./account');
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Bookshelf</DialogTitle>
      <DialogContent>
        <DialogContentText>Enter a name for your bookshelf</DialogContentText>
        <AddBookshelfForm />
      </DialogContent>
      {/* <DialogActions>
        <Controls.Button onClick={handleClose} text='Cancel' />
        <Controls.Button onClick={handleSubmit} text='Log In' />
      </DialogActions> */}
    </Dialog>
  );
};

export default AddBookshelfModal;
