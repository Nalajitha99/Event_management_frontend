import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button, Grid } from '@mui/material';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import { useNavigate } from 'react-router-dom';

const events = [
    { eventImage: 'imageUrl', eventname: 'Event Name', category:'Indoor', location: 'Location', date: '2024-09-12', venueType: 'Indoor', time: '18:00', tickets: 2, status:'Accepted' },
    { eventImage: 'imageUrl', eventname: 'Event Name2', category:'Outdoor', location: 'Location2', date: '2024-09-12', venueType: 'Outdoor', time: '18:00', tickets: 5, status:'Pending' }

];

const EventList = () => {
  const borderColor = '#6a136a';

  const navigate = useNavigate();
  
  const handleViewMore = () => {
    navigate('/viewevent')
  }

  return (
    <>
    <NavBar userType={'admin'}/>
    <Grid container xs={12} sx={{ maxWidth:'100%'}}>
    <TableContainer component={Paper} style={{ marginTop: '50px', marginBottom:'20px' }}>
      <Typography variant="h6" style={{ padding: '16px' }}>
        Event List
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ border: `2px solid ${borderColor}` }}>Event</TableCell>
            <TableCell align="center" sx={{ border: `2px solid ${borderColor}` }}>Category</TableCell>
            <TableCell align="center" sx={{ border: `2px solid ${borderColor}` }}>Date</TableCell>
            <TableCell align="center" sx={{ border: `2px solid ${borderColor}` }}>Venue Type</TableCell>
            <TableCell align="center" sx={{ border: `2px solid ${borderColor}` }}>Location</TableCell>
            <TableCell align="center" sx={{ border: `2px solid ${borderColor}` }}>Status</TableCell>
            <TableCell align="center" sx={{ border: `2px solid ${borderColor}` }}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {events.length > 0 ? (
            events.map((event, index) => (
              <TableRow key={index}>
                <TableCell align="center" sx={{ border: `1px solid ${borderColor}` }}>{event.eventname}</TableCell>
                <TableCell align="center" sx={{ border: `1px solid ${borderColor}` }}>{event.category}</TableCell>
                <TableCell align="center" sx={{ border: `1px solid ${borderColor}` }}>{event.date}</TableCell>
                <TableCell align="center" sx={{ border: `1px solid ${borderColor}` }}>{event.venueType}</TableCell>
                <TableCell align="center" sx={{ border: `1px solid ${borderColor}` }}>{event.location}</TableCell>
                <TableCell align="center" sx={{ border: `1px solid ${borderColor}` }}>{event.status}</TableCell>
                <TableCell align="center" sx={{ border: `1px solid ${borderColor}` }}><Button variant='contained' color='secondary' sx={{backgroundColor:"#6a136a"}} onClick={handleViewMore}>View more</Button></TableCell>
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

export default EventList;
