import { makeStyles } from '@material-ui/core';
import React, { useState, useEffect } from 'react';

export const useForm = (initialFValues) => {
  const [values, setValues] = useState(initialFValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return {
    values,
    setValues,
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

// kinda get this
export const Form = (props) => {
  const classes = useStyles();
  return <form className={classes.root}>{props.children}</form>;
};
