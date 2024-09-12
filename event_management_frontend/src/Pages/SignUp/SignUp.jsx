import React from 'react';
import { Container, Grid, TextField, Button, Typography, MenuItem, Box, createTheme, ThemeProvider } from '@mui/material';
import sideImg from '../../Assets/login_sideImg.jpg'

const SignUp = () => {

    const darkTheme = createTheme({
        palette: {
            mode: "dark",
        },
    })

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
                          <form>
                              <Grid container spacing={3}>
                                  <Grid item xs={12} sm={6}>
                                      <TextField
                                          required
                                          fullWidth
                                          label="First Name"
                                          variant="outlined"
                                      />
                                  </Grid>

                                  <Grid item xs={12} sm={6}>
                                      <TextField
                                          required
                                          fullWidth
                                          label="Last Name"
                                          variant="outlined"
                                      />
                                  </Grid>

                                  <Grid item xs={12} sm={6}>
                                      <TextField
                                          required
                                          fullWidth
                                          select
                                          label="Gender"
                                          variant="outlined"
                                          defaultValue=""
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
                                          type="password"
                                          label="Password"
                                          variant="outlined"
                                      />
                                  </Grid>

                                  <Grid item xs={12}>
                                      <TextField
                                          required
                                          fullWidth
                                          label="NIC No"
                                          variant="outlined"
                                      />
                                  </Grid>

                                  <Grid item xs={12}>
                                      <TextField
                                          required
                                          fullWidth
                                          label="E-mail"
                                          variant="outlined"
                                          type="email"
                                      />
                                  </Grid>

                                  <Grid item xs={12}>
                                      <TextField
                                          required
                                          fullWidth
                                          label="Contact No"
                                          variant="outlined"
                                      />
                                  </Grid>

                                  <Grid item xs={12}>
                                      <TextField
                                          required
                                          fullWidth
                                          multiline
                                          rows={4}
                                          label="Address"
                                          variant="outlined"
                                      />
                                  </Grid>

                                  <Grid item xs={12} sm={6}>
                                      <Button
                                          fullWidth
                                          variant="outlined"
                                          color="secondary"
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
