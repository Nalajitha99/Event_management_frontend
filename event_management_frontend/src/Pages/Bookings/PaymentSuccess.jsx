import React from 'react';
import { Box, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import NavBar from '../../Components/NavBar';

const PaymentSuccess = () => {
  const location = useLocation();
  const { eventId, ticketCount, username } = location.state;

  return (
    <>
    <NavBar/>
    <Box sx={{ padding: '20px', textAlign: 'center', marginTop:'100px' }}>
      <Typography variant="h4" gutterBottom>
        Payment Successful!
      </Typography>
      <Typography variant="body1">
        Dear {username}, 
        Your payment for {ticketCount} tickets to event {eventId} has been processed.
      </Typography>
    </Box>
    </>
  );
};

export default PaymentSuccess;
