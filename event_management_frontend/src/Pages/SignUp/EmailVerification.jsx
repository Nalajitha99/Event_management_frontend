import React, { useState } from 'react';
import { Container, Box, TextField, Typography, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EmailVerification = () => {
  
  const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        otp: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/v1/user/verifyEmail', formData);
            console.log(response.data); 

            setFormData({
                email: '',
                otp: '',
            });

            alert(response.data.message);
            navigate('/login')

        } catch (error) {
            if (error.response && error.response.data) {
                alert(error.response.data.message);  
            } else {
                console.error('Error during signup:', error);
                alert("OTP is Incorrect!");
            }
        }
    };




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
              value={formData.email}
              onChange={handleChange}
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
              value={formData.otp}
              onChange={handleChange}
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
              onClick={handleSubmit} 
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