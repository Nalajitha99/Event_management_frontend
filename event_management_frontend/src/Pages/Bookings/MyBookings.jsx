import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button, Grid } from '@mui/material';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';

const bookings = [
    { eventImage: 'imageUrl', event: 'Event Name', location: 'Location', date: '2024-09-12', venueType: 'Indoor', time: '18:00', tickets: 2 },
    { eventImage: 'imageUrl', event: 'Event Name2', location: 'Location2', date: '2024-09-12', venueType: 'Outdoor', time: '18:00', tickets: 5 }

];

const MyBookings = () => {
  const borderColor = '#6a136a'; 

  return (
    <>
    <NavBar/>
    <Grid container xs={12} sx={{ maxWidth:'100%'}}>
    <TableContainer component={Paper} style={{ marginTop: '50px', marginBottom:'20px' }}>
      <Typography variant="h6" style={{ padding: '16px' }}>
        My Bookings
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ border: `2px solid ${borderColor}` }}>Event</TableCell>
            <TableCell sx={{ border: `2px solid ${borderColor}` }}>Location</TableCell>
            <TableCell sx={{ border: `2px solid ${borderColor}` }}>Date</TableCell>
            <TableCell sx={{ border: `2px solid ${borderColor}` }}>Venue Type</TableCell>
            <TableCell sx={{ border: `2px solid ${borderColor}` }}>Time</TableCell>
            <TableCell sx={{ border: `2px solid ${borderColor}` }}>No of Tickets</TableCell>
            <TableCell sx={{ border: `2px solid ${borderColor}` }}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookings.length > 0 ? (
            bookings.map((booking, index) => (
              <TableRow key={index}>
                <TableCell sx={{ border: `1px solid ${borderColor}` }}>{booking.event}</TableCell>
                <TableCell sx={{ border: `1px solid ${borderColor}` }}>{booking.location}</TableCell>
                <TableCell sx={{ border: `1px solid ${borderColor}` }}>{booking.date}</TableCell>
                <TableCell sx={{ border: `1px solid ${borderColor}` }}>{booking.venueType}</TableCell>
                <TableCell sx={{ border: `1px solid ${borderColor}` }}>{booking.time}</TableCell>
                <TableCell sx={{ border: `1px solid ${borderColor}` }}>{booking.tickets}</TableCell>
                <TableCell sx={{ border: `1px solid ${borderColor}` }}><Button variant='contained' sx={{backgroundColor:"#6a136a"}}>View more</Button></TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={7} align="center" sx={{ border: `1px solid ${borderColor}` }}>No bookings available</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
    <Footer/>
    </>
  );
};

export default MyBookings;
