import React, { useState, useEffect } from 'react';
import { Container, Grid, TextField, Button, MenuItem, Typography, CardActionArea, CardMedia, Card, CardContent, CardActions } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Footer from '../../Components/Footer';
import NavBar from '../../Components/NavBar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ViewEvents = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [visibleEvents, setVisibleEvents] = useState(6);
  const [showMore, setShowMore] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:8080/api/v1/event/getAllEvents', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        setEvents(response.data);
        setFilteredEvents(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the event data!", error);
      });
  }, []);

  const handleAddEvent = () => {
    navigate("/addevent");
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    filterEvents(e.target.value, category);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    filterEvents(searchTerm, e.target.value);
  };

  const filterEvents = (searchTerm, category) => {
    let filtered = events;

    if (searchTerm) {
      filtered = filtered.filter(event =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (category) {
      filtered = filtered.filter(event => event.category === category);
    }

    setFilteredEvents(filtered);
    setVisibleEvents(6);
    setShowMore(false);
  };

  const handleToggleView = () => {
    if (showMore) {
      setVisibleEvents(6); // Show only 6 events
    } else {
      setVisibleEvents(filteredEvents.length); // Show all events
    }
    setShowMore(!showMore); // Toggle between 'Show More' and 'Show Less'
  };


  const handleBuyTickets = (eventId) => {
    navigate(`/eventDetails/${eventId}`);
  }

  return (
    <>
      <NavBar />
      <Container maxWidth="lg" style={{ marginTop: '50px', marginBottom: '20px' }}>
        <Grid container spacing={2} alignItems="center" justifyContent="space-between">
          <Grid item xs={12} sm={4} lg={4}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search Events"
              value={searchTerm}
              onChange={handleSearch}
              InputProps={{
                startAdornment: <SearchIcon />,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4} lg={4}>
            <TextField
              select
              fullWidth
              variant="outlined"
              value={category}
              onChange={handleCategoryChange}
              label='Select Category'
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Entertainment">Entertainment</MenuItem>
              <MenuItem value="Educational">Educational</MenuItem>
              <MenuItem value="Health">Health</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={4} lg={4} container justifyContent="flex-end">
            <Button variant="contained" color='secondary' startIcon={<AddIcon />} sx={{ backgroundColor: "#6a136a" }} onClick={handleAddEvent}>
              Add Event
            </Button>
          </Grid>
        </Grid>

        <Grid container spacing={3} style={{ marginTop: '30px' }}>
        {filteredEvents.length > 0 ? (
        filteredEvents.slice(0, visibleEvents).map((event, index)  => (
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
                      <Typography gutterBottom variant="h5" component="div" sx={{ color: '#6a136a', fontWeight:'bold' }}>
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
                    <Button variant="contained" color='secondary' size="medium" sx={{ backgroundColor: "#6a136a" }} onClick={() => handleBuyTickets(event.eventId)}>
                      Buy Tickets
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

            ))
          ) : (
            <Typography variant="h6" style={{ marginTop: '20px', marginBottom: '20px' }}>
              No events found.
            </Typography>
          )
          }
          
        </Grid>

        {filteredEvents.length > 6 && (
          <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
            <Button
              variant="contained"
              color='secondary'
              startIcon={showMore ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
              sx={{ backgroundColor: "#6a136a" }}
              onClick={handleToggleView}
            >
              {showMore ? "View Less" : "View More"}
            </Button>
          </Grid>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default ViewEvents;
