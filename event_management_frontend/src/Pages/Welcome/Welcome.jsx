import React from 'react';
import { Button, Box, Container, Typography } from '@mui/material';
import logo from '../../Assets/logo12.png'; 
import './Welcome.css'; 

const Welcome = () => {
  return (
      <Box className="welcome-page">
          <Container maxWidth="sm" style={{ textAlign: 'center' }}>
              <img src={logo} alt="Website Logo" className="logo" />
              {/* <Typography variant="h2" gutterBottom style={{ color: '#fff', marginTop: '20px' }}>
                  Welcome to Our Website
              </Typography> */}
              <Typography variant="h6" gutterBottom style={{ color: '#fff', marginBottom: '20px' }}>
                  Please sign in or sign up to continue
              </Typography>

              <Button variant="contained" color="primary" size="large" style={{ marginRight: '10px' }}>
                  Sign In
              </Button>

              <Button variant="contained" color="secondary" size="large">
                  Sign Up
              </Button>
          </Container>
      </Box>
  );
};

export default Welcome;
