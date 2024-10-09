import React, { useEffect, useState } from 'react';
import { Grid, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import NavBar from '../../Components/NavBar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ChartPlaceholder = ({ text }) => (
    <Paper elevation={3} style={{ height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h6">{text}</Typography>
    </Paper>
);

const Dashboard = () => {

    const [eventRequests, setEventRequests] = useState([]);
    const [allUsers, setAllUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get('http://localhost:8080/api/v1/eventOrganizer/getAllEventRequests', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                setEventRequests(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the event data!", error);
            });

        axios.get('http://localhost:8080/api/v1/user/getAllUsers', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                setAllUsers(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the user data!", error);
            });
    }, []);

    const adminUsers = allUsers.filter(user => user.role === 'ADMIN');



    const handleViewMore = (organizerId) => {
        navigate(`/vieweventRequest/${organizerId}`);
    };

    return (
        <>
            <NavBar />
            <div style={{ padding: '20px' }}>
                <Grid container spacing={3}>

                    {/* Total Sold Tickets - Chart */}
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h5" style={{ fontWeight: "bold", color: "#6a136a", marginBottom: '20px' }}>Registered users of this month</Typography>
                        <ChartPlaceholder text="Line Chart" />
                    </Grid>

                    {/* Weekly Users - Donut Chart */}
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h5" style={{ fontWeight: "bold", color: "#6a136a", marginBottom: '20px' }}>Past Events</Typography>
                        <ChartPlaceholder text="Donut Chart" />
                    </Grid>

                    {/* Event Registration User List */}
                    <Grid item xs={12} sm={8}>
                        <Typography variant="h5" style={{ fontWeight: "bold", color: "#6a136a", marginBottom: '20px' }}>Event Request List</Typography>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Event Organizing company Name</TableCell>
                                        <TableCell>Event Type</TableCell>
                                        <TableCell>Status</TableCell>
                                        <TableCell></TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {/* Placeholder Rows */}
                                    {eventRequests.length > 0 ? (
                                        eventRequests.map((eventOrganizer, index) => (
                                            <TableRow key={index}>
                                                <TableCell >{eventOrganizer.companyName}</TableCell>
                                                <TableCell >{eventOrganizer.eventType}</TableCell>
                                                <TableCell >{eventOrganizer.status}</TableCell>
                                                <TableCell >
                                                    <Button
                                                        variant='contained'
                                                        color='secondary'
                                                        sx={{ backgroundColor: "#6a136a" }}
                                                        onClick={() => handleViewMore(eventOrganizer.organizerId)}
                                                    >
                                                        View more
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    ) : (
                                        <TableRow>
                                            <TableCell>
                                                No Event Requets available
                                            </TableCell>
                                        </TableRow>
                                    )}
                                    {/* Add more rows as needed */}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>

                    {/* Admin List */}
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h5" style={{ fontWeight: "bold", color: "#6a136a", marginBottom: '20px' }}>Admin List</Typography>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {adminUsers.length > 0 ? (
                                        adminUsers.map((admin, index) => (
                                            <TableRow key={index}>
                                                <TableCell>{admin.firstName}</TableCell>
                                                <TableCell>
                                                    <Button
                                                        variant='contained'
                                                        color='secondary'
                                                        sx={{ backgroundColor: "#6a136a" }}
                                                        onClick={() => navigate(`/viewAdmin/${admin.customerId}`)}
                                                    >
                                                        See More
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    ) : (
                                        <TableRow>
                                            <TableCell>No Admins Found</TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>

                </Grid>
            </div>
        </>
    );
};

export default Dashboard;
