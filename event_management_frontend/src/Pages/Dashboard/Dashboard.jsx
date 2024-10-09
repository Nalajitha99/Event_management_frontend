import React, { useEffect, useState } from 'react';
import { Grid, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import NavBar from '../../Components/NavBar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Placeholder for Chart components
const ChartPlaceholder = ({ text }) => (
  <Paper elevation={3} style={{ height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Typography variant="h6">{text}</Typography>
  </Paper>
);

const Dashboard = () => {

    const [eventRequests, setEventRequests] = useState([]);
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
  }, []);

  const handleViewMore = (organizerId) => {
    navigate(`/vieweventRequest/${organizerId}`); 
  };

  return (
    <>
    <NavBar/>
    <div style={{ padding: '20px' }}>
      <Grid container spacing={3}>
        
        {/* Total Sold Tickets - Chart */}
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Total Sold Tickets</Typography>
          <ChartPlaceholder text="Line Chart" />
        </Grid>

        {/* Weekly Users - Donut Chart */}
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Weekly Users</Typography>
          <ChartPlaceholder text="Donut Chart" />
        </Grid>

        {/* Event Registration User List */}
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" style={{  fontWeight:"bold", color:"#6a136a", marginBottom: '20px' }}>Event Request List</Typography>
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
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Admin List</Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>See More</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Placeholder Rows */}
                <TableRow>
                  <TableCell>Admin 1</TableCell>
                  <TableCell><button>See More</button></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Admin 2</TableCell>
                  <TableCell><button>See More</button></TableCell>
                </TableRow>
                {/* Add more rows as needed */}
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
