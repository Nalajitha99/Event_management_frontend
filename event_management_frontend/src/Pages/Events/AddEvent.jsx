import React, { useState } from 'react';
import { Grid, TextField, Select, MenuItem, Button, InputLabel, FormControl, Box } from '@mui/material';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import axios from 'axios';

const AddEvent = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    venue: '',
    venueType: '',
    ticketPrice: '',
    noOfTickets: '',
    location: '',
    date: '',
    startTime: '',
    endTime: '',
    image: null // for file upload
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submitData = new FormData();

    // Append form fields to submitData
    for (const key in formData) {
      submitData.append(key, formData[key]);
    }

    const token = localStorage.getItem('token'); // Get token from localStorage

    try {
      const response = await axios.post('http://localhost:8080/api/v1/event/saveEvent', submitData, {
        headers: { 
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}` // Attach the token here
        },
        withCredentials: true
      });
      console.log('Event created successfully:', response.data);
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  return (
    <>
      <div>
        <NavBar userType={'admin'} />
      </div>
      <Box
        sx={{
          position: "relative",
          top: "63%",
          left: "50%",
          transform: "translate(-50%, 0%)",
          width: "75%",
          height: "87%",
          bgcolor: "rgba(255, 255, 255)",
          border: "none",
          boxShadow: 24,
          padding: 3,
          marginTop: 2,
          marginBottom: 2
        }}
      >
        <form onSubmit={handleSubmit} style={{ padding: '10px' }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Event Title"
                variant="filled"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Start Time"
                variant="filled"
                name="startTime"
                value={formData.startTime}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Event Description"
                variant="filled"
                multiline
                rows={4}
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                label="End Time"
                variant="filled"
                name="endTime"
                value={formData.endTime}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>Event Category</InputLabel>
                <Select
                  variant='filled'
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
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
                variant="filled"
                name="ticketPrice"
                value={formData.ticketPrice}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Venue"
                variant="filled"
                name="venue"
                value={formData.venue}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                label="No of Tickets"
                variant="filled"
                name="noOfTickets"
                value={formData.noOfTickets}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>Venue Type</InputLabel>
                <Select
                  variant='filled'
                  name="venueType"
                  value={formData.venueType}
                  onChange={handleInputChange}
                >
                  <MenuItem value="indoor">Indoor</MenuItem>
                  <MenuItem value="outdoor">Outdoor</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                label='Image'
                type='file'
                onChange={handleFileChange}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Location"
                variant="filled"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                type='date'
                fullWidth
                variant="filled"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12} style={{ textAlign: 'right' }}>
              <Button variant="outlined" color='secondary' sx={{ marginRight: '10px', minWidth: "150px" }}>Clear</Button>
              <Button type="submit" variant="contained" color="secondary" sx={{ backgroundColor: "#6a136a", color: "#fff", minWidth: "150px" }}>Save</Button>
            </Grid>
          </Grid>
        </form>
      </Box>
      <Footer />
    </>
  );
};

export default AddEvent;
