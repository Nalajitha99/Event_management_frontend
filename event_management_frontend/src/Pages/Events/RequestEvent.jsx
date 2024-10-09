import React, { useState } from 'react'
import NavBar from '../../Components/NavBar'
import { TextField, Button, MenuItem, Grid, Typography, Box } from '@mui/material';
import Footer from '../../Components/Footer';
import axios from 'axios';

const RequestEvent = () => {

    const [formData, setFormData] = useState({
        organizerName: '',
        companyName: '',
        eventType: '',
        ticketCount: '',
        email: '',
        contactNo: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleClear = () => {
        setFormData({
            organizerName: '',
            companyName: '',
            eventType: '',
            ticketCount: '',
            email: '',
            contactNo: '',
            message: ''
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');

        try {
            const response = await axios.post('http://localhost:8080/api/v1/eventOrganizer/saveEventOrganizer', formData,{
                headers: { 
                    Authorization: `Bearer ${token}`
                  },
                  withCredentials: true
            });
            console.log('Event request successfully:',response.data); 

            alert("Event request done successfully!");
            handleClear();

        } catch (error) {
            if (error.response && error.response.data) {
                alert(error.response.data.message);  
            } else {
                console.error('Error during event request:', error);
                alert("Event request failed! Please try again.");
            }
        }
    };

    return (
        <>
            <NavBar/>
            <Box 
        sx={{
            maxWidth: '75%',
            margin: 'auto',
            padding: '50px',
            borderRadius: '10px'
        }}
        >
            <form onSubmit={handleSubmit}>
        <Typography variant="h4" gutterBottom sx={{ color: '#6a136a', fontWeight: 'bold' }}>
            Request For An Event
        </Typography>
        
        <Grid container spacing={2}>

            <Grid item xs={12} sm={6}>
                <TextField 
                    fullWidth 
                    label="Organizer Name" 
                    name='organizerName'
                    required
                    value={formData.organizerName}
                    onChange={handleChange} 
                />
            </Grid>

            <Grid item xs={12} sm={6}>
            <TextField 
                fullWidth 
                label="Company Name"
                name='companyName' 
                required
                value={formData.companyName}
                onChange={handleChange} 
            />
            </Grid>

            <Grid item xs={12} sm={6}>
            <TextField
                fullWidth
                select
                label="Event Type"
                name='eventType'
                required
                value={formData.eventType}
                onChange={handleChange}
            >
                <MenuItem value="Entertainment">Entertainment</MenuItem>
                <MenuItem value="Educational">Educational</MenuItem>
                <MenuItem value="Health">Health</MenuItem>
            </TextField>
            </Grid>

            <Grid item xs={12} sm={6}>
            <TextField 
                fullWidth 
                label="Expected Ticket Count"
                name='ticketCount' 
                required
                value={formData.ticketCount}
                onChange={handleChange} 
            />
            </Grid>

            <Grid item xs={12} sm={6}>
            <TextField 
                fullWidth 
                label="Email Address"
                name='email' 
                required 
                type="email"
                value={formData.email}
                onChange={handleChange} 
            />
            </Grid>

            <Grid item xs={12} sm={6}>
            <TextField
                fullWidth
                label="Contact Number"
                name='contactNo'
                required
                value={formData.contactNo}
                onChange={handleChange} 
            />
            </Grid>

            <Grid item xs={12}>
            <TextField
                fullWidth
                label="Message"
                name='message'
                multiline
                rows={4}
                required
                value={formData.message}
                onChange={handleChange} 
            />
            </Grid>

            <Grid item xs={12}>
            <Button 
                variant="contained"
                type='submit' 
                fullWidth  
                color='secondary' 
                size="medium" 
                sx={{ backgroundColor: "#6a136a" }}
            >
                Submit
            </Button>
            </Grid>
        </Grid>
        </form>
        </Box>
        <Footer/>
        </>
    )
}

export default RequestEvent