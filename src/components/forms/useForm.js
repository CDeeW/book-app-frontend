import { makeStyles } from '@material-ui/core';
import React, { useState, useEffect } from 'react';

export const useForm = (initialFValues) => {
  const [values, setValues] = useState(initialFValues);

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
  };
};

const useStyles = makeStyles((theme) => ({
  // we give the form this root style, then each input has the name ".MuiFormControl-root" and this theme is used on them. Something
  //   like that
  root: {
    '& .MuiFormControl-root': {
      width: '80%',
      margin: theme.spacing(1),
    },
  },
}));

export const Form = (props, ...other) => {
  const classes = useStyles();
  // TODO dont really get the children bit?
  return (
    <form className={classes.root} {...other}>
      {props.children}
    </form>
  );
};
