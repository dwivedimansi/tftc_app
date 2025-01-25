import React, { useState } from 'react'; // Make sure React and useState are imported

import { Link, useNavigate } from 'react-router-dom';

// material-ui imports
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { TextField, Button } from '@mui/material';

// Google OAuth import
import { GoogleLogin } from '@react-oauth/google';

// project imports
import AuthWrapper1 from '../AuthWrapper1';
import AuthCardWrapper from '../AuthCardWrapper';
import Logo from 'ui-component/Logo';
import AuthFooter from 'ui-component/cards/AuthFooter';

const Login = () => {
  const downMD = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  // Sample hardcoded password validation for demo purposes
  const correctPassword = "123"; // This should be replaced with real authentication logic.

  // Handle Email/Password Login
  const handleEmailPasswordLogin = () => {
    if (password === correctPassword) {
      // Redirect to Dashboard if password is correct
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/test/dashboard');
    } else {
      setError('Incorrect password, please try again!');
    }
  };

  // Handle Google Login success
  const handleGoogleLoginSuccess = (response) => {
    console.log('Google Login Success:', response);
    localStorage.setItem('isAuthenticated', 'true');
    navigate('/test/dashboard');
  };

  // Handle Google Login failure
  const handleGoogleLoginFailure = (error) => {
    console.log('Google Login Failed:', error);
  };

  return (
    <AuthWrapper1>
      <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
            <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
              <AuthCardWrapper>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                  <Grid item sx={{ mb: 3 }}>
                    <Link to="#" aria-label="logo">
                      <Logo />
                    </Link>
                  </Grid>

                  <Grid item xs={12}>
                    <Grid container direction={{ xs: 'column-reverse', md: 'row' }} alignItems="center" justifyContent="center">
                      <Grid item>
                        <Stack alignItems="center" justifyContent="center" spacing={1}>
                          <Typography color="secondary.main" gutterBottom variant={downMD ? 'h3' : 'h2'}>
                            Hi, Welcome Back
                          </Typography>
                          <Typography variant="caption" fontSize="16px" textAlign={{ xs: 'center', md: 'inherit' }}>
                            Enter your credentials to continue
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Grid>

                  {/* Email/Password Form */}
                  <Grid item xs={12}>
                    <TextField
                      label="Email"
                      type="email"
                      variant="outlined"
                      fullWidth
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Password"
                      type="password"
                      variant="outlined"
                      fullWidth
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      error={!!error}
                      helperText={error}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" onClick={handleEmailPasswordLogin} fullWidth>
                      Login
                    </Button>
                  </Grid>

                  <Grid item xs={12}>
                    <Divider />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography variant="caption" align="center" display="block" sx={{ mb: 2 }}>
                      Or sign in with Google
                    </Typography>
                    <GoogleLogin
                      onSuccess={handleGoogleLoginSuccess}
                      onError={handleGoogleLoginFailure}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Grid container direction="column" alignItems="center" xs={12}>
                      <Typography component={Link} to="/pages/register/register3" variant="subtitle1" sx={{ textDecoration: 'none' }}>
                        Don&apos;t have an account?
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </AuthCardWrapper>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
          <AuthFooter />
        </Grid>
      </Grid>
    </AuthWrapper1>
  );
};

export default Login;
