import { Container, Typography, Grid, Card, CardContent, CardActions, Button, CardActionArea, CardMedia } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CardView = ({event}) => {

  const [events, setEvents] = useState([]); 

  const navigate = useNavigate();

  const handleBuyTickets = (eventId) => {
    navigate(`/eventDetails/${eventId}`); 
  }

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const token = localStorage.getItem('token');

        const response = await axios.get('http://localhost:8080/api/v1/event/getAllEvents', {
          headers: {
            Authorization: `Bearer ${token}`  
          }
        });
        setEvents(response.data); 
      } catch (error) {
        console.error("There was an error fetching the event data!", error);
      }
    };

    fetchEvents(); 
  }, []);

  return (
    <>
      <Container maxWidth='lg'>
        {/* <Typography variant='h5' style={{ marginTop: "50px" }}>
          Upcoming Events
        </Typography> */}

        <Grid container spacing={5} style={{ marginTop: "20px" }}>
          {events.map((event, index) => (   
            <Grid item xs={12} sm={4} md={4} key={index}>
              <Card sx={{ maxWidth: 345 }} style={{ padding: "10px", marginBottom: "30px" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={`data:image/jpeg;base64,${event.imageData}`} 
                    alt={event.title}
                    style={{ borderRadius: "5px" }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {event.title}  
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      {event.category}  
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
                  <Button variant="contained" color='secondary' size="medium" sx={{backgroundColor:"#6a136a"}} onClick={() => handleBuyTickets(event.eventId)}>
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
