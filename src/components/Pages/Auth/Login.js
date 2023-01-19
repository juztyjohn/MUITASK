import React from 'react';
import { Grid, Box, Alert } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import { useState } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';

export const Login = () => {
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
      email: data.get('email'),
      password: data.get('password'),
    };
    // console.log(actualData);
    if (actualData.email && actualData.password) {
      console.log(actualData);
      document.getElementById('login-form').reset();
      setError({ status: true, msg: 'Login Success', type: 'success' });
        navigate({
            pathname:'/dashborad',
            search: createSearchParams({
                email:data.get('email'),
            }).toString()
        });
    } else {
      setError({ status: true, msg: 'All Fieds are Required', type: 'error' });
    }
  };
  return (
    <Box
      component="form"
      noValidate
      sx={{ mt: 1 }}
      id="login-form"
      onSubmit={handleSubmit}
    >
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
        autoComplete="current-password"
      />
      <Button type="submit" fullWidth variant="contained" color='secondary' sx={{ mt: 3, mb: 2 }}>
        Login
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
      {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
    </Box>
  );
};
