import { Container, Typography, Grid, Card, CardContent, CardActions, Button, CardActionArea, CardMedia } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CardView = () => {

  const [events, setEvents] = useState([]);  // State for storing events fetched from backend

  const navigate = useNavigate();

  // Handle Buy Tickets button click, redirect to event details
  const handleBuyTickets = (eventId) => {
    navigate(`/eventDetails/${eventId}`);  // Navigate to event details page with eventId
  }

  // Fetch events from the backend API with JWT token
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Get the JWT token from localStorage (or wherever you've stored it)
        const token = localStorage.getItem('token');

        const response = await axios.get('http://localhost:8080/api/v1/event/getAllEvents', {
          headers: {
            Authorization: `Bearer ${token}`  // Pass the token in Authorization header
          }
        });
        setEvents(response.data);  // Set events data in state
      } catch (error) {
        console.error("There was an error fetching the event data!", error);
      }
    };

    fetchEvents();  // Call the fetchEvents function
  }, []);

  return (
    <>
      <Container maxWidth='lg'>
        <Typography variant='h5' style={{ marginTop: "50px" }}>
          Upcoming Events
        </Typography>

        <Grid container spacing={5} style={{ marginTop: "20px" }}>
          {events.map((event, index) => (   // Iterate through events fetched from backend
            <Grid item xs={12} sm={4} md={4} key={index}>
              <Card sx={{ maxWidth: 345 }} style={{ padding: "10px", marginBottom: "30px" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={`data:image/jpeg;base64,${event.imageData}`}  // Display image from byte array
                    alt={event.title}
                    style={{ borderRadius: "5px" }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {event.title}  
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {new Date(event.date).toLocaleDateString()} 
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {event.startTime}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {event.venue}  
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#6a136a' }}>
                      LKR {event.ticketPrice}  
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button variant="contained" color='secondary' size="medium" sx={{backgroundColor:"#6a136a"}} onClick={() => handleBuyTickets(event.id)}>
                    Buy Tickets
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default CardView;
