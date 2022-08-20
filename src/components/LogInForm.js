import React from 'react';
import { Form, useForm } from './useForm';
import Controls from '../components/Controls';
import { useNavigate } from 'react-router-dom';
import { confirmUserEmailAndPassword } from '../services/userService';

const initialFValues = {
  email: '',
  password: '',
};

const LogInForm = () => {
  const { values, setValues, errors, setErrors, handleInputChange } =
    useForm(initialFValues);
  let navigate = useNavigate();

  const validate = () => {
    const temp = {};

    temp.email = /.+@.+..+/.test(values.email) ? '' : 'Enter a valid email';

    temp.password = values.password ? '' : 'Enter a password';

    confirmUserEmailAndPassword({ ...values });

    setErrors({ ...temp });

    return Object.values(temp).every((x) => x == '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log('login successful');
      navigate('./account');
    } else {
      console.log('login failed');
    }
  };

  return (
    // don't know why we need to pass in onSubmit as we just call it when the button is clicked.
    <Form onSubmit={handleSubmit}>
      <Controls.TextInput
        variant='outlined'
        name='email'
        label='Email Address'
        value={values.email}
        onChange={handleInputChange}
        error={errors.email}
      />
      <Controls.TextInput
        variant='outlined'
        name='password'
        label='Password'
        type='password'
        value={values.password}
        onChange={handleInputChange}
        error={errors.password}
      />

      <div>
        <Controls.Button text='Submit' type='submit' onClick={handleSubmit} />
        <Controls.Button text='Reset' variant='default' />
      </div>
    </Form>
  );
};

export default LogInForm;
