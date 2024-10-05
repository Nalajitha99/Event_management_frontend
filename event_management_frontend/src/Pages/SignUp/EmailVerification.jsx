import React, { useState } from 'react';
import { Container, Box, TextField, Typography, Button, Grid } from '@mui/material';

const EmailVerification = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');

  return (
    <Container maxWidth="sm">
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          marginTop: '20vh',
          padding: 3, 
          boxShadow: 3, 
          borderRadius: 2 
        }}
      >
        <Typography variant="h5" gutterBottom>
          Email Verification
        </Typography>

        <Typography variant="body2" gutterBottom sx={{ color: "gray", mb: 3 }}>
          Please enter your email and the OTP code sent to your inbox.
        </Typography>

        <Grid container spacing={3}>
          {/* Email Field */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              type="email"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              label="OTP Code"
              variant="outlined"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter the OTP code"
              type="text"
              inputProps={{ maxLength: 6 }} 
            />
          </Grid>

          <Grid item xs={12}>
            <Button 
              fullWidth 
              variant="contained" 
              color="primary" 
              // onClick={handleSubmit} 
              sx={{ padding: "10px 0" }}
            >
              Verify OTP
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default EmailVerification;