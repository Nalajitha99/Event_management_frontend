import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import axios from 'axios';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { eventId, totalPrice, ticketCount } = location.state;

  const [cardHolderName, setCardHolderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const [errors, setErrors] = useState({});

  const validateFields = () => {
    const newErrors = {};

    if (!cardHolderName.trim()) {
      newErrors.cardHolderName = 'Card holder name is required.';
    }

    if (!cardNumber.match(/^\d{16}$/)) {
      newErrors.cardNumber = 'Card number must be 16 digits.';
    }

    if (!expiryDate.match(/^(0[1-9]|1[0-2])\/\d{2}$/)) {
      newErrors.expiryDate = 'Expiry date must be in MM/YY format.';
    }

    if (!cvv.match(/^\d{3}$/)) {
      newErrors.cvv = 'CVV must be a 3-digit number.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePayment = async () => {
    if (!validateFields()) {
      return;
    }

    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    try {
      const paymentResponse = await axios.post(
        'http://localhost:8080/api/v1/payment/savePayment',
        {
          eventId,
          username,
          totalPrice,
          ticketCount,
          cardNumber,
          expiryDate,
          cvv,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );

      if (paymentResponse.status === 200) {
        await axios.put(
          `http://localhost:8080/api/v1/event/updateTickets/${eventId}`,
          null,
          {
            params: { purchasedTickets: ticketCount },
            headers: {
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
          }
        );

        navigate(`/paymentSuccess`, { state: { eventId, ticketCount, username } });
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
              error={!!errors.cardHolderName}
              helperText={errors.cardHolderName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Card Number"
              fullWidth
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              margin="normal"
              error={!!errors.cardNumber}
              helperText={errors.cardNumber}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Expiry Date (MM/YY)"
              fullWidth
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              margin="normal"
              error={!!errors.expiryDate}
              helperText={errors.expiryDate}
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
              error={!!errors.cvv}
              helperText={errors.cvv}
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
