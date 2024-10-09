import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import axios from 'axios';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { eventId, totalPrice, ticketCount } = location.state; // Retrieve state passed from EventDetails

  const [cardHolderName, setCardHolderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = async () => {
    const token = localStorage.getItem('token');
    try {
      // Call backend API to process the payment
      const paymentResponse = await axios.post('http://localhost:8080/api/v1/payment/savePayment', {
        eventId,
        totalPrice,
        ticketCount,
        cardNumber,  // Ensure these variables are properly initialized and validated
        expiryDate,
        cvv,
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        },
        withCredentials: true
      });
  
      if (paymentResponse.status === 200) {
        // After successful payment, reduce available tickets
        await axios.put(`http://localhost:8080/api/v1/event/updateTickets/${eventId}`, null, {
          params: { 
            purchasedTickets: ticketCount,  // Correctly send as query parameter
          },
          headers: {
            Authorization: `Bearer ${token}`
          },
          withCredentials: true
        });
  
        navigate(`/paymentSuccess`, { state: { eventId, ticketCount } });
      }
    } catch (error) {
      console.error('Payment failed:', error);
    }
  };
  

  return (
    <>
      <NavBar />
      <Box sx={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
        <Typography variant="h4" gutterBottom>
          Payment Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Card Holder Name"
              fullWidth
              value={cardHolderName}
              onChange={(e) => setCardHolderName(e.target.value)}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Card Number"
              fullWidth
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Expiry Date (MM/YY)"
              fullWidth
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="CVV"
              fullWidth
              type="password"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              margin="normal"
            />
          </Grid>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'right', marginTop: '20px' }}>
          <Button
            variant="contained"
            color="secondary"
            onClick={handlePayment}
          >
            Pay LKR {totalPrice}
          </Button>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Payment;
