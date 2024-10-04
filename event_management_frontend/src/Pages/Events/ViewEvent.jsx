import React, { useEffect, useState } from 'react';
import { Grid, TextField, Select, MenuItem, Button, InputLabel, FormControl, Box, Typography } from '@mui/material';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ViewEvent = () => {
  const [isEditable, setIsEditable] = useState(false);
  const { eventId } = useParams();
  const [event, setEvent] = useState(null); 
  const [updatedEvent, setUpdatedEvent] = useState({}); // New state to store updated data

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
        setUpdatedEvent(response.data); // Set initial values for editing
      } catch (error) {
        console.error('Error fetching event details:', error);
      }
    };

    fetchEventDetails();
  }, [eventId]);

  const handleEdit = () => {
    setIsEditable(!isEditable);
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(`http://localhost:8080/api/v1/event/updateEvent/${eventId}`, updatedEvent, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Event updated successfully:", response.data);
      setEvent(response.data); // Update local state with the saved data
      setIsEditable(false);
    } catch (error) {
      console.error("Error updating event:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedEvent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (!event) {
    return <div>Loading event details...</div>;
  }

  return (
    <>
      <NavBar userType={'admin'} />
      <Box sx={{ position: "relative", top: "63%", left: "50%", transform: "translate(-50%, 0%)", width: "75%", height: "87%", bgcolor: "rgba(255, 255, 255)", boxShadow: 24, padding: 3, marginTop: 2, marginBottom: 2 }}>
        <form style={{ padding: '10px' }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography fullWidth label="Event Title" variant="h3" sx={{color:"#6a136a", fontWeight:"bold"}}>{event.title}</Typography>
            </Grid>

            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <img
                src={`data:image/jpeg;base64,${event.imageData}`} 
                alt="Event"
                style={{ width: '30%', height: '100%', objectFit: 'cover' }}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Description"
                name="description" 
                value={updatedEvent.description || ''} 
                onChange={handleChange}
                multiline
                rows={5}
                disabled={!isEditable}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Start Time"
                name="startTime" 
                type="time"
                value={updatedEvent.startTime || ''}
                onChange={handleChange}
                disabled={!isEditable}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                label="End Time"
                name="endTime" 
                type="time"
                value={updatedEvent.endTime || ''}
                onChange={handleChange}
                disabled={!isEditable}
              />
            </Grid>

            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>Event Category</InputLabel>
                <Select
                  name="category"
                  value={updatedEvent.category || ''}
                  onChange={handleChange}
                  disabled={!isEditable}
                >
                  <MenuItem value="Entertainment">Entertainment</MenuItem>
                  <MenuItem value="Educational">Educational</MenuItem>
                  <MenuItem value="Health">Health</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Ticket Price"
                name="ticketPrice" 
                value={updatedEvent.ticketPrice || ''}
                onChange={handleChange}
                disabled={!isEditable}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Venue"
                name="venue" 
                value={updatedEvent.venue || ''}
                onChange={handleChange}
                disabled={!isEditable}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                label="No of Tickets"
                name="noOfTickets" 
                value={updatedEvent.noOfTickets || ''}
                onChange={handleChange}
                disabled={!isEditable}
              />
            </Grid>

            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>Venue Type</InputLabel>
                <Select
                  name="venueType"
                  value={updatedEvent.venueType || ''}
                  onChange={handleChange}
                  disabled={!isEditable}
                >
                  <MenuItem value="indoor">Indoor</MenuItem>
                  <MenuItem value="outdoor">Outdoor</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Location"
                name="location"
                value={updatedEvent.location || ''}
                onChange={handleChange}
                disabled={!isEditable}
              />
            </Grid>

            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>Status</InputLabel>
                <Select
                  name="status"
                  value={updatedEvent.status || ''}
                  onChange={handleChange}
                  disabled={!isEditable}
                >
                  <MenuItem value="accepted">Accepted</MenuItem>
                  <MenuItem value="rejected">Rejected</MenuItem>
                  <MenuItem value="pending">Pending</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <TextField
                type="date"
                fullWidth
                name="date"
                value={updatedEvent.date || ''}
                onChange={handleChange}
                disabled={!isEditable}
              />
            </Grid>

            <Grid item xs={12} style={{ textAlign: 'right' }}>
              <Button
                variant="outlined"
                color="secondary"
                sx={{ marginRight: '10px', minWidth: "150px" }}
                onClick={handleEdit}
              >
                {isEditable ? "Cancel" : "Edit"}
              </Button>

              {isEditable && (
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ backgroundColor: "#6a136a", color: "#fff", minWidth: "150px" }}
                  onClick={handleSave}
                >
                  Save
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
      </Box>
      <Footer />
    </>
  );
};

export default ViewEvent;
