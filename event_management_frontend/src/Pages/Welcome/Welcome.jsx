import React, { useEffect, useState } from 'react';
import { Button, Box, Container, Typography } from '@mui/material';
import logo from '../../Assets/logo12.png'; 
import './Welcome.css'; 
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer'

const Welcome = () => {

    const images = [
        require('../../Assets/background.jpg.webp'),
        require('../../Assets/background2.jpg'),
        require('../../Assets/background3.jpg'),
      ];
    
      const [bgIndex, setBgIndex] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setBgIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); 
        return () => clearInterval(interval); 
      }, [images.length]);

    const navigate = useNavigate();

    const handleSignUpClick = () => {
        navigate('/signup');
    };

    const handleLogInClick = () => {
        navigate('/login');
    }

  return (
    <>
      <Box className="welcome-page"
          style={{
              backgroundImage: `url(${images[bgIndex]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transition: 'background-image 1s ease-in-out', 
          }}
      >
          <Container maxWidth="sm" style={{ textAlign: 'center' }}>
              <img src={logo} alt="Website Logo" className="logo" />
              {/* <Typography variant="h2" gutterBottom style={{ color: '#fff', marginTop: '20px' }}>
                  Welcome to Our Website
              </Typography> */}
              <Typography variant="h6" gutterBottom style={{ color: '#fff', marginBottom: '20px' }}>
                  Please sign in or sign up to continue
              </Typography>

                  <Button
                      variant="outlined"
                      sx={{
                          ml: "10px",
                          mr: "20px",
                          borderRadius: 28,
                          color: "#ffffff",
                          minWidth: "170px",
                          backgroundColor: "#000"
                      }} size="large"
                      style={{ marginRight: '10px' }}
                      onClick={handleLogInClick}
                  >
                      Log In
                  </Button>
                  <Button
                      variant="outlined"
                      sx={{
                          ml: "10px",
                          mr: "20px",
                          borderRadius: 28,
                          color: "#ffffff",
                          minWidth: "170px",
                          backgroundColor: "#000"
                      }} size="large"
                      style={{ marginRight: '10px' }}
                      onClick={handleSignUpClick}
                  >
                      Sign Up
                  </Button>
          </Container>
      </Box>
      <Footer/>
    </>
  );
};

export default Welcome;
