import React from 'react';
import { useForm, Form } from './useForm';

import { Container, Grid } from '@material-ui/core';

import Controls from './Controls';
import { saveUserAccount } from '../services/user';

const CreateAccountForm = () => {
  const genders = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' },
  ];

  const initialFValues = {
    firstName: '',
    lastName: '',
    email: '',
    dob: new Date(),
    gender: '',
    password: '',
    confirmedPassword: '',
  };

  const { values, setValues, handleInputChange } = useForm(initialFValues);

  const handleSubmit = () => {
    saveUserAccount(values);
  };

  return (
    <Container>
      <Form>
        <Grid container>
          <Grid item xs={6}>
            <Controls.TextInput
              variant='outlined'
              name='firstName'
              label='First Name'
              value={values.firstName}
              onChange={handleInputChange}
            />
            <Controls.TextInput
              variant='outlined'
              name='lastName'
              label='Last Name'
              value={values.lastName}
              onChange={handleInputChange}
            />
            <Controls.TextInput
              variant='outlined'
              name='email'
              label='Email'
              value={values.email}
              onChange={handleInputChange}
            />

            <Controls.DatePicker
              name='dob'
              label=' Date of Birth'
              value={values.dob}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <Controls.RadioGroup
              name='gender'
              label='Gender'
              value={values.gender}
              onChange={handleInputChange}
              items={genders}
            />

            <Controls.TextInput
              variant='outlined'
              name='password'
              label='Password'
              type='password'
              value={values.password}
              onChange={handleInputChange}
            />
            <Controls.TextInput
              variant='outlined'
              name='confirmedPassword'
              label='Confirm Password'
              type='password'
              value={values.confirmedPassword}
              onChange={handleInputChange}
            />
            <div>
              <Controls.Button
                text='Submit'
                onClick={handleSubmit}
                color='secondary'
              />
              <Controls.Button text='Reset' variant='contained' />
            </div>
          </Grid>
        </Grid>
      </Form>
    </Container>
  );
};

export default CreateAccountForm;
