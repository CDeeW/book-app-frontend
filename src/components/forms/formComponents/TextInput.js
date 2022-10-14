import React from 'react';
import { TextField } from '@material-ui/core';

const TextInput = (props) => {
  const { variant, name, label, value, type, error = null, onChange } = props;
  return (
    <TextField
      variant={variant}
      name={name}
      label={label}
      value={value}
      type={type || 'text'}
      onChange={onChange}
      {...(error && { error: true, helperText: error })}
    />
  );
};

export default TextInput;
