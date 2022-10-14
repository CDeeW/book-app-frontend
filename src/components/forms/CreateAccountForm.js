import React from 'react';
import { useForm, Form } from './useForm';

import { Container, Grid } from '@material-ui/core';

import Controls from '../Controls';
import { saveUserAccount } from '../../services/userService';
import { useNavigate } from 'react-router-dom';

const CreateAccountForm = () => {
  let navigate = useNavigate();

  const genders = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' },
  ];

  const initialFValues = {
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    gender: '',
    dob: new Date(),
    password: '',
    confirmedPassword: '',
  };

  const { values, setValues, errors, setErrors, handleInputChange } =
    useForm(initialFValues);

  const validate = () => {
    let temp = {};

    temp.firstName = values.firstName ? '' : 'Enter a First Name';

    temp.lastName = values.lastName ? '' : 'Enter a Last Name';

    temp.email = /.+@.+..+/.test(values.email) ? '' : 'Enter a valid email';

    temp.mobile =
      values.mobile.length >= 10 ? '' : 'Enter a valid mobile number';

    console.log(values.password);
    console.log(values.confirmedPassword);
    console.log(values.password == values.confirmedPassword);

    temp.confirmedPassword =
      values.password == values.confirmedPassword
        ? ''
        : 'Passwords do not match';

    console.log(temp.confirmedPassword);

    setErrors({ ...temp });

    return Object.values(temp).every((x) => x == '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
    if (validate()) {
      saveUserAccount(values);
      navigate('./account');
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={6}>
            <Controls.TextInput
              variant='outlined'
              name='firstName'
              label='First Name'
              value={values.firstName}
              onChange={handleInputChange}
              error={errors.firstName}
            />
            <Controls.TextInput
              variant='outlined'
              name='lastName'
              label='Last Name'
              value={values.lastName}
              onChange={handleInputChange}
              error={errors.lastName}
            />
            <Controls.TextInput
              variant='outlined'
              name='email'
              label='Email'
              value={values.email}
              onChange={handleInputChange}
              error={errors.email}
            />

            <Controls.TextInput
              variant='outlined'
              name='mobile'
              label='Mobile'
              value={values.mobile}
              onChange={handleInputChange}
              error={errors.mobile}
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

            <Controls.DatePicker
              name='dob'
              label=' Date of Birth'
              value={values.dob}
              onChange={handleInputChange}
            />

            <Controls.TextInput
              variant='outlined'
              name='password'
              label='Password'
              type='password'
              value={values.password}
              onChange={handleInputChange}
              //error={errors}
            />
            <Controls.TextInput
              variant='outlined'
              name='confirmedPassword'
              label='Confirm Password'
              type='password'
              value={values.confirmedPassword}
              onChange={handleInputChange}
              error={errors.confirmedPassword}
            />
            <div>
              <Controls.Button
                text='Submit'
                onClick={handleSubmit}
                color='secondary'
              />
            </div>
          </Grid>
        </Grid>
      </Form>
    </Container>
  );
};

export default CreateAccountForm;
