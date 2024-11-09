import React, { useState, useEffect } from 'react';
import NavBar from '../../Components/NavBar';
import { TextField, Button, MenuItem, Grid, Typography, Box } from '@mui/material';
import Footer from '../../Components/Footer';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ViewEventRequest = () => {
    const { organizerId } = useParams(); 
    const [eventRequest, setEventRequest] = useState({
        organizerName: '',
        companyName: '',
        eventType: '',
        ticketCount: '',
        email: '',
        contactNo: '',
        message: '',
        status: ''
    });

    useEffect(() => {
        const fetchEventDetails = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`http://localhost:8080/api/v1/eventOrganizer/getEventOrganizerById/${organizerId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setEventRequest(response.data);

        } catch (error) {
            console.error('Error fetching event details:', error);
        }
    };
        fetchEventDetails();
}, [organizerId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventRequest(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        axios.put(`http://localhost:8080/api/v1/eventOrganizer/updateStatus/${organizerId}`, { status: eventRequest.status }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                alert("Status updated successfully!");
            })
            .catch(error => {
                console.error("There was an error updating the status!", error);
            });
    };

    return (
        <>
            <NavBar />
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
                        Evenet Request
                    </Typography>

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Organizer Name"
                                name='organizerName'
                                value={eventRequest.organizerName}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Company Name"
                                name='companyName'
                                value={eventRequest.companyName}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                select
                                label="Event Type"
                                name='eventType'
                                value={eventRequest.eventType}
                                InputProps={{
                                    readOnly: true,
                                }}
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
                                value={eventRequest.ticketCount}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Email Address"
                                name='email'
                                value={eventRequest.email}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Contact Number"
                                name='contactNo'
                                value={eventRequest.contactNo}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Message"
                                name='message'
                                multiline
                                rows={4}
                                value={eventRequest.message}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Status"
                                name='status'
                                value={eventRequest.status}
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
                                Save
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
            <Footer />
        </>
    )
}

export default ViewEventRequest;
