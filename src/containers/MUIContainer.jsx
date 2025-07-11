import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

// MUI Components

import EmailIcon from '@mui/icons-material/Email';

import MUITextField from '../components/commonComponents/commonMUIComponents/MUITextField';
import { Button, } from '@mui/material';


const MUIContainer = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = data => { console.log('Form Data:', data)};


  const handleChange = event => {
    const value = event.target.value;
    setSelectedValue(value);
    console.log('Selected Value:', value);
  };

  return (
    <>
      <MUITextField
        name="password"
        control={control}
        label="Password"
        fieldType="password"
        showPasswordToggle
        helperText=""
      />

      <br />
      <br />

      <MUITextField
        name="framework"
        control={control}
        label="Choose Framework"
        select
        selectOptions={[
          { label: 'React', value: 'react' },
          { label: 'Vue', value: 'vue' },
          { label: 'Angular', value: 'angular' },
        ]}
        helperText=""
      />
      <br />
      <br />

      <form onSubmit={handleSubmit(onSubmit)}>
        <MUITextField
          name="email"
          label="Email"
          control={control}
          startIcon={<EmailIcon />}
          helperText="Enter your email"
        />

        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Submit
        </Button>
      </form>
    </>
  );
};

export default MUIContainer;
