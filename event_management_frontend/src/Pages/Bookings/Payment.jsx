import React, { useState } from 'react';
import { Grid, TextField, Button, Box, Typography, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import NavBar from '../../Components/NavBar';

const Payment = () => {
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    billingAddress: '',
    country: '',
    paymentMethod: 'credit-card',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add payment processing logic
    console.log(cardDetails);
  };

  return (
    <>
    <NavBar/>
    <Box
      sx={{
        width: '75%',
        margin: 'auto',
        marginTop: '50px',
        padding: '20px',
        boxShadow: 3,
        borderRadius: '10px',
        bgcolor: 'white'
      }}
    >
      <Typography variant="h4" gutterBottom>
        Payment Details
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <FormControl fullWidth variant="filled">
              <InputLabel id="payment-method-label">Payment Method</InputLabel>
              <Select
                labelId="payment-method-label"
                value={cardDetails.paymentMethod}
                onChange={handleChange}
                label="Payment Method"
                name="paymentMethod"
              >
                <MenuItem value="credit-card">Credit Card</MenuItem>
                <MenuItem value="debit-card">Debit Card</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={8}>
            <TextField
              fullWidth
              label="Cardholder's Name"
              variant="filled"
              name="cardName"
              value={cardDetails.cardName}
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Card Number"
              variant="filled"
              name="cardNumber"
              type="number"
              value={cardDetails.cardNumber}
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Expiry Date (MM/YY)"
              variant="filled"
              name="expiryDate"
              value={cardDetails.expiryDate}
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              label="CVV"
              variant="filled"
              name="cvv"
              type="number"
              value={cardDetails.cvv}
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid item xs={12} style={{ textAlign: 'center' }} sx={{display: 'flex',justifyContent: 'flex-end',marginTop: '20px',}}>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              sx={{
                minWidth: '150px',
                backgroundColor: '#6a136a',
                color: '#fff',
              }}
            >
              Submit Payment
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
    </>
  );
};

export default Payment;
