import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Button, Grid } from '@mui/material';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EventList = () => {
  const borderColor = '#6a136a';
  const navigate = useNavigate();

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:8080/api/v1/event/getAllEvents', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the event data!", error);
      });
  }, []);

  // Handle navigation to event detail or more event information
  const handleViewMore = (eventId) => {
    navigate(`/viewevent/${eventId}`); // Assuming you have a route for viewing individual events
  };

  return (
    <>
      <NavBar  />
      <Grid container xs={12} sx={{ padding: '0 20px', justifyContent: 'center' }}>
        <Grid item xs={12} sm={10} md={8} lg={10}>
        <TableContainer style={{ marginTop: '50px', marginBottom: '20px' }}>
          <Typography variant="h4" style={{  fontWeight:"bold", color:"#6a136a", marginBottom: '20px' }}>
            Event List
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ border: `2px solid ${borderColor}`, fontWeight:"bold" }}>Event</TableCell>
                <TableCell align="center" sx={{ border: `2px solid ${borderColor}`, fontWeight:"bold" }}>Category</TableCell>
                <TableCell align="center" sx={{ border: `2px solid ${borderColor}`, fontWeight:"bold" }}>Date</TableCell>
                <TableCell align="center" sx={{ border: `2px solid ${borderColor}`, fontWeight:"bold" }}>Venue Type</TableCell>
                <TableCell align="center" sx={{ border: `2px solid ${borderColor}`, fontWeight:"bold" }}>Location</TableCell>
                <TableCell align="center" sx={{ border: `2px solid ${borderColor}`, fontWeight:"bold" }}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {events.length > 0 ? (
                events.map((event, index) => (
                  <TableRow key={index}>
                    <TableCell align="center" sx={{ border: `1px solid ${borderColor}` }}>{event.title}</TableCell>
                    <TableCell align="center" sx={{ border: `1px solid ${borderColor}` }}>{event.category}</TableCell>
                    <TableCell align="center" sx={{ border: `1px solid ${borderColor}` }}>{new Date(event.date).toLocaleDateString()}</TableCell>
                    <TableCell align="center" sx={{ border: `1px solid ${borderColor}` }}>{event.venueType}</TableCell>
                    <TableCell align="center" sx={{ border: `1px solid ${borderColor}` }}>{event.location}</TableCell>
                    <TableCell align="center" sx={{ border: `1px solid ${borderColor}` }}>
                      <Button
                        variant='contained'
                        color='secondary'
                        sx={{ backgroundColor: "#6a136a" }}
                        onClick={() => handleViewMore(event.eventId)} // Pass the event id to handleViewMore
                      >
                        View more
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} align="center" sx={{ border: `1px solid ${borderColor}` }}>
                    No events available
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default EventList;
