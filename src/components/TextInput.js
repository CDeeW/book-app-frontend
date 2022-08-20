import React from 'react';
import { TextField } from '@material-ui/core';

const TextInput = (props) => {
  const { variant, name, label, value, onChange, ...other } = props;
  return (
    <TextField
      variant={variant}
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      {...other}
    />
  );
};

export default TextInput;
