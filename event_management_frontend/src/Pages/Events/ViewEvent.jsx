import React, { useState } from 'react';
import { Grid, TextField, Select, MenuItem, Button, InputLabel, FormControl, Box, Typography } from '@mui/material';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';

const ViewEvent = () => {
  // State to manage whether the fields are editable
  const [isEditable, setIsEditable] = useState(false);

  // Function to toggle edit mode
  const handleEdit = () => {
    setIsEditable(!isEditable);
  };

  // Function to handle saving the changes
  const handleSave = () => {
    // Implement your save logic here, like sending the data to the server
    console.log("Data saved");

    // After saving, turn off edit mode
    setIsEditable(false);
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
        <form style={{ padding: '10px' }}>
          <Grid container spacing={2}>

            <Grid item xs={6}>
              <Typography fullWidth label="Event Title" variant="h4">Event Title</Typography>
            </Grid>

            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <img
                src="https://via.placeholder.com/150" // Replace this with your image URL
                alt="Event"
                style={{ width: '30%', height: '100%', objectFit: 'cover' }}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField 
                fullWidth 
                label="Event Description" 
                variant="filled" 
                multiline 
                rows={5} 
                disabled={!isEditable} // Disable when not in edit mode
              />
            </Grid>

            <Grid item xs={6}>
              <TextField 
                fullWidth 
                label="Start Time" 
                variant="filled" 
                disabled={!isEditable} // Disable when not in edit mode
              />
            </Grid>

            <Grid item xs={6}>
              <TextField 
                fullWidth 
                label="End Time" 
                variant="filled" 
                disabled={!isEditable} // Disable when not in edit mode
              />
            </Grid>

            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>Event Category</InputLabel>
                <Select
                  variant='filled'
                  disabled={!isEditable} // Disable when not in edit mode
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
                disabled={!isEditable} // Disable when not in edit mode
              />
            </Grid>

            <Grid item xs={6}>
              <TextField 
                fullWidth 
                label="Venue" 
                variant="filled" 
                disabled={!isEditable} // Disable when not in edit mode
              />
            </Grid>

            <Grid item xs={6}>
              <TextField 
                fullWidth 
                label="No of Tickets" 
                variant="filled" 
                disabled={!isEditable} // Disable when not in edit mode
              />
            </Grid>

            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>Venue Type</InputLabel>
                <Select
                  variant='filled'
                  disabled={!isEditable} // Disable when not in edit mode
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
                variant="filled" 
                disabled={!isEditable} // Disable when not in edit mode
              />
            </Grid>

            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>Status</InputLabel>
                <Select
                  variant='filled'
                  disabled={!isEditable} // Disable when not in edit mode
                >
                  <MenuItem value="accepted">Accepted</MenuItem>
                  <MenuItem value="rejected">Rejected</MenuItem>
                  <MenuItem value="pending">Pending</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <TextField 
                type='date' 
                fullWidth 
                placeholder='' 
                variant="filled" 
                disabled={!isEditable} // Disable when not in edit mode
              />
            </Grid>

            <Grid item xs={12} style={{ textAlign: 'right' }}>
              {/* Edit Button: Toggles edit mode */}
              <Button
                variant="outlined"
                color="secondary"
                sx={{ marginRight: '10px', minWidth: "150px" }}
                onClick={handleEdit}
              >
                {isEditable ? "Cancel" : "Edit"} {/* Toggle button text */}
              </Button>

              {/* Save Button: Only visible in edit mode */}
              {isEditable && (
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ backgroundColor: "#6a136a", color: "#fff", minWidth: "150px" }}
                  onClick={handleSave} // Handle save action
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
