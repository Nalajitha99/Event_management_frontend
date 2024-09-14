import React from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';

const EventDetails = () => {
  // Replace these values with actual event data
  const event = {
    title: 'Event Title',
    description: 'This is a brief description of the event.',
    location: 'New York City, NY',
    venue: 'Madison Square Garden',
    date: '2024-09-15',
    startTime: '7:00 PM',
    ticketPrice: '$100',
    image: 'https://via.placeholder.com/600x300', // Placeholder image
  };

  return (
    <>
    <NavBar/>
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
      {/* Event Title */}
      <Typography variant="h4" gutterBottom>
        {event.title}
      </Typography>

      {/* Image */}
      <Box
        component="img"
        src={event.image}
        alt="Event"
        sx={{
          width: '100%',
          height: '300px',
          objectFit: 'cover',
          marginBottom: '20px',
          border: '1px solid #ccc',
        }}
      />

      {/* Event Details */}
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
          <Typography variant="body1">{event.date}</Typography>
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
          <Typography variant="body1">{event.ticketPrice}</Typography>
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
            backgroundColor:'#6a136a'
          }}
        >
          Book Tickets
        </Button>
      </Box>
    </Box>
    <Footer/>
    </>
  );
};

export default EventDetails;
