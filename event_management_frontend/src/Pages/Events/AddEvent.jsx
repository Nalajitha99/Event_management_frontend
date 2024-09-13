import React from 'react';
import { Grid, TextField, Select, MenuItem, Button, InputLabel, FormControl, Box } from '@mui/material';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';

const AddEvent = () => {
  return (
    <>
    <div>
    <NavBar userType={'admin'}/>
    </div>
    <Box
        sx={{
            position:"relative",
            top: "63%",
            left: "50%",
            transform: "translate(-50%, 0%)",
            width: "75%",
            height: "87%",
            bgcolor: "rgba(255, 255, 255)",
            border: "none",
            boxShadow: 24,
            padding:3,
            marginTop:2,
            marginBottom:2
        }}
    >
    <form style={{ padding: '10px' }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField fullWidth label="Event Title" variant="filled" />
        </Grid>

        <Grid item xs={6}>
          <TextField fullWidth label="Start Time" variant="filled" />
        </Grid>

        <Grid item xs={6}>
          <TextField fullWidth label="Event Description" variant="filled" multiline rows={4} />
        </Grid>

        <Grid item xs={6}>
          <TextField fullWidth label="End Time" variant="filled" />
        </Grid>

        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Event Category</InputLabel>
            <Select variant='filled'>
              <MenuItem value="Entertainment">Entertainment</MenuItem>
              <MenuItem value="Educational">Educational</MenuItem>
              <MenuItem value="Health">Health</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={6}>
          <TextField fullWidth label="Ticket Price" variant="filled" />
        </Grid>

        <Grid item xs={6}>
          <TextField fullWidth label="Venue" variant="filled" />
        </Grid>

        <Grid item xs={6}>
          <TextField fullWidth label="No of Tickets" variant="filled" />
        </Grid>

        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Venue Type</InputLabel>
            <Select variant='filled'>
              <MenuItem value="indoor">Indoor</MenuItem>
              <MenuItem value="outdoor">Outdoor</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={6}>
          <TextField fullWidth label='Image' type='file' />
          <Button variant="contained" color='secondary' style={{ marginTop: '8px' }} sx={{backgroundColor:"#6a136a", color:"#fff",minWidth:"150px"}}>Upload</Button>
        </Grid>

        <Grid item xs={6}>
          <TextField fullWidth label="Location" variant="filled" />
        </Grid>

        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Status</InputLabel>
            <Select variant='filled'>
              <MenuItem value="accepted">Accepted</MenuItem>
              <MenuItem value="rejected">Rejected</MenuItem>
              <MenuItem value="pending">Pending</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={6}>
          <TextField type='date' fullWidth placeholder='' variant="filled" />
        </Grid>

        <Grid item xs={12} style={{ textAlign: 'right' }}>
          <Button variant="outlined" color='secondary' sx={{ marginRight: '10px',minWidth:"150px" }}>Clear</Button>
          <Button variant="contained" color="secondary" sx={{backgroundColor:"#6a136a", color:"#fff",minWidth:"150px"}}>Save</Button>
        </Grid>
      </Grid>
    </form>
    </Box>
    <Footer/>
    </>
  );
};

export default AddEvent;
