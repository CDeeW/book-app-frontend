import React from 'react';
import { Form, useForm } from './useForm';
import Controls from '../components/Controls';

const initialFValues = {
  email: '',
  password: '',
};

const LogInForm = () => {
  const { values, setValues, handleInputChange } = useForm(initialFValues);

  return (
    <Form>
      <Controls.TextInput
        variant='outlined'
        name='email'
        label='Email Address'
        value={values.email}
        onChange={handleInputChange}
      />
      <Controls.TextInput
        variant='outlined'
        name='password'
        label='Password'
        type='password'
        value={values.password}
        onChange={handleInputChange}
      />

      {/* <div>
        <Controls.Button text='Submit' />
        <Controls.Button text='Reset' variant='default' />
      </div> */}
    </Form>
  );
};

export default LogInForm;
