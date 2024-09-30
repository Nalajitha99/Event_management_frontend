import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import { Grid, Box, Typography, Button } from '@mui/material';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import axios from 'axios';

const EventDetails = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null); 

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const token = localStorage.getItem('token'); 
        const response = await axios.get(`http://localhost:8080/api/v1/event/getEventByID/${eventId}`, {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });
        setEvent(response.data); 
      } catch (error) {
        console.error('Error fetching event details:', error);
      }
    };

    fetchEventDetails();
  }, [eventId]);

  if (!event) {
    return <div>Loading event details...</div>; 
  }

  return (
    <>
      <NavBar />
      <Box
        sx={{
          padding: '20px',
          maxWidth: '900px',
          margin: 'auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h3" gutterBottom>
          {event.title}
        </Typography>

        <Box
          component="img"
          src={`data:image/jpeg;base64,${event.imageData}`} 
          alt={event.title}
          sx={{
            width: '70%',
            height: '70%',
            objectFit: 'cover',
            marginBottom: '20px',
            border: '1px solid #ccc',
          }}
        />

        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography variant="body1" fontWeight="bold">
              Event Description
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body1">{event.description}</Typography>
          </Grid>

          <Grid item xs={4}>
            <Typography variant="body1" fontWeight="bold">
              Location
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body1">{event.location}</Typography>
          </Grid>

          <Grid item xs={4}>
            <Typography variant="body1" fontWeight="bold">
              Venue
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body1">{event.venue}</Typography>
          </Grid>

          <Grid item xs={4}>
            <Typography variant="body1" fontWeight="bold">
              Date
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body1">
              {new Date(event.date).toLocaleDateString()} {/* Format the date */}
            </Typography>
          </Grid>

          <Grid item xs={4}>
            <Typography variant="body1" fontWeight="bold">
              Start Time
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body1">{event.startTime}</Typography>
          </Grid>

          <Grid item xs={4}>
            <Typography variant="body1" fontWeight="bold">
              Ticket Price
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body1">LKR {event.ticketPrice}</Typography>
          </Grid>
        </Grid>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: '20px',
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            sx={{
              paddingX: '20px',
              backgroundColor: '#6a136a',
            }}
          >
            Book Tickets
          </Button>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default EventDetails;
