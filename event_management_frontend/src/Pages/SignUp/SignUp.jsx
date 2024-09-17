import React, { useState } from 'react';
import { Container, Grid, TextField, Button, Typography, MenuItem, Box, createTheme, ThemeProvider } from '@mui/material';
import sideImg from '../../Assets/login_sideImg.jpg'
import axios from "axios"

const SignUp = () => {

    const darkTheme = createTheme({
        palette: {
            mode: "dark",
        },
    })

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        password: '',
        nicNo: '',
        email: '',
        contactNo: '',
        address: '',
        username:''
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
            const response = await axios.post('http://localhost:8080/api/v1/user/saveUser', formData);
            console.log(response.data); // Success message
        } catch (error) {
            console.error('Error during signup:', error);
        }
    };

  return (
      <>
          <div
              style={{
                  backgroundImage: `url(${sideImg})`,
                  backgroundSize: "cover",
                  height: "100vh",
                  color: "#f5f5f5",
              }}
          >
              <Box
                  sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "75%",
                      height: "90%",
                      bgcolor: "rgba(0, 0, 0, 0.3)",
                      border: "none",
                      boxShadow: 24,
                      borderRadius: 10
                  }}
              >
                  <ThemeProvider theme={darkTheme}>
                      <Container maxWidth="md" style={{ marginTop: '50px' }}>
                          <Typography variant="h4" align="center" gutterBottom>
                              User SignUp
                          </Typography>
                          <form onSubmit={handleSubmit}>
                              <Grid container spacing={3}>
                                  <Grid item xs={12} sm={6}>
                                      <TextField
                                          required
                                          fullWidth
                                          label="First Name"
                                          name='firstName'
                                          variant="outlined"
                                          value={formData.firstName}
                                          onChange={handleChange}
                                      />
                                  </Grid>

                                  <Grid item xs={12} sm={6}>
                                      <TextField
                                          required
                                          fullWidth
                                          label="Last Name"
                                          name='lastName'
                                          variant="outlined"
                                          value={formData.lastName}
                                          onChange={handleChange}
                                      />
                                  </Grid>

                                  <Grid item xs={12} sm={6}>
                                      <TextField
                                          required
                                          fullWidth
                                          select
                                          label="Gender"
                                          name='gender'
                                          variant="outlined"
                                          value={formData.gender}
                                          onChange={handleChange}
                                      >
                                          <MenuItem value="Male">Male</MenuItem>
                                          <MenuItem value="Female">Female</MenuItem>
                                          <MenuItem value="Other">Other</MenuItem>
                                      </TextField>
                                  </Grid>

                                  <Grid item xs={12} sm={6}>
                                      <TextField
                                          required
                                          fullWidth
                                          label="NIC No"
                                          name='nicNo'
                                          variant="outlined"
                                          value={formData.nicNo}
                                          onChange={handleChange}
                                      />
                                  </Grid>

                                  <Grid item xs={12} sm={6}>
                                      <TextField
                                          required
                                          fullWidth
                                          label="Username"
                                          name='username'
                                          variant="outlined"
                                          value={formData.username}
                                          onChange={handleChange}
                                      />
                                  </Grid>

                                  <Grid item xs={12} sm={6}>
                                      <TextField
                                          required
                                          fullWidth
                                          type="password"
                                          name='password'
                                          label="Password"
                                          variant="outlined"
                                          value={formData.password}
                                          onChange={handleChange}
                                      />
                                  </Grid>

                                  <Grid item xs={12}>
                                      <TextField
                                          required
                                          fullWidth
                                          label="E-mail"
                                          name='email'
                                          variant="outlined"
                                          type="email"
                                          value={formData.email}
                                          onChange={handleChange}
                                      />
                                  </Grid>

                                  <Grid item xs={12}>
                                      <TextField
                                          required
                                          fullWidth
                                          label="Contact No"
                                          name='contactNo'
                                          variant="outlined"
                                          value={formData.contactNo}
                                          onChange={handleChange}
                                      />
                                  </Grid>

                                  <Grid item xs={12}>
                                      <TextField
                                          fullWidth
                                          multiline
                                          rows={4}
                                          label="Address"
                                          name='address'
                                          variant="outlined"
                                          value={formData.address}
                                          onChange={handleChange}
                                      />
                                  </Grid>

                                  <Grid item xs={12} sm={6}>
                                      <Button
                                          fullWidth
                                          variant="outlined"
                                          color="secondary"
                                          type="reset"
                                      >
                                          Clear
                                      </Button>
                                  </Grid>

                                  <Grid item xs={12} sm={6}>
                                      <Button
                                          fullWidth
                                          variant="contained"
                                          sx={{backgroundColor:"#6a136a", color:"#fff"}}
                                          color='secondary'
                                          type='submit'
                                      >
                                          SignUp
                                      </Button>
                                  </Grid>
                              </Grid>
                          </form>
                      </Container>
                  </ThemeProvider>
              </Box>
          </div>
      </>
  );
};

export default SignUp;
