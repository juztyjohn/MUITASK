import React from 'react';
import { Box, Alert, FormControlLabel } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckBox } from '@mui/icons-material';

const Registration = () => {
    const [error, setError] = useState({
        status: false,
        msg: '',
        type: '',
      });
      const navigate = useNavigate();
      const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
          name: data.get('name'),
          email: data.get('email'),
          password: data.get('password'),
          password_confirmation: data.get('password_confirmation'),
          tc: data.get('tc'),
        };
        // console.log(actualData);
        if (actualData.name && actualData.email && actualData.password && actualData.tc !== null) {
          if(actualData.password === actualData.password_confirmation)
          {
            console.log(actualData);
          document.getElementById('registration-form').reset();
          setError({ status: true, msg: 'Registration Successful', type: 'success' });
            navigate('/dashborad');
          }
          else{
            setError({ status: true, msg: 'Password & Confirm Password Does not match..!', type: 'error' });

          }
        } else {
          setError({ status: true, msg: 'All Fieds are Required', type: 'error' });
        }
    }
  return (
    <Box
      component="form"
      noValidate
      sx={{ mt: 1 }}
      id="registration-form"
      onSubmit={handleSubmit}
    >
        <TextField
        margin="normal"
        required
        fullWidth
        id="name"
        label="Name"
        name="name"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password_confirmation"
        label="Confirm Password"
        type="password"
        id="password_confirmation"
      />

      <FormControlLabel control={<CheckBox value="agree" color="secondary" name="tc" id="tc"/>} label="I agree to Terms and Conditions."/>
      <Button type="submit" fullWidth variant="contained" color="secondary" sx={{ mt: 3, mb: 2 }}>
        JOIN
      </Button>

      {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
    </Box>
  )
}

export default Registration