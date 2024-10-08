import React, { useState } from 'react';
import { Box, TextField, Typography, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { assets } from '../../Assets/assets'

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
      const response = await axios.put('http://localhost:8080/api/v1/user/verifyEmail', formData);
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
    <>
      <div
        style={{
          backgroundSize: "cover",
          height: "100vh",
          textAlign: "center"
        }}
      >
        <img src={assets.logo11} alt='' style={{ width: "300px", height: "140px", marginLeft: "100px", marginBottom: "20px", marginTop: "20px" }} />
        <Box
          sx={{
            position: "absolute",
            top: "70%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "30%",
            height: "90%",
            bgcolor: "rgba(0, 0, 0, 0)",
            border: "none",
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
                name='email'
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
                name='otp'
                label="OTP Code"
                variant="outlined"
                value={formData.otp}
                onChange={handleChange}
                placeholder="Enter the OTP code"
                inputProps={{ maxLength: 6 }}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                onClick={handleSubmit}
                sx={{ padding: "10px 0", backgroundColor: "#6a136a" }}
              >
                Verify OTP
              </Button>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default EmailVerification;