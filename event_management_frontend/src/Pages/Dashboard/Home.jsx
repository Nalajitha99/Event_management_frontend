import React from 'react';
import NavBar from '../../Components/NavBar';
import GoogleMap from '../../Components/GoogleMap';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { Search } from '@mui/icons-material';
import MyCalendar from '../../Components/Calender';
import CardView from '../../Components/CardView';
import Footer from '../../Components/Footer';

const Home = () => {
    return (
        <>
            <NavBar userType="customer" />
            <Grid container spacing={2} sx={{ padding: { xs: '16px', sm: '32px' } }}>
                <Grid item xs={12} md={4}>
                    <div className='mt-5'>
                        <Typography variant='h5'>See Events Near By</Typography>
                        <Typography>Join to nearby event based on your location</Typography>
                    </div>
                </Grid>
                <Grid item xs={12} md={3}>
                    <div className='mt-4'>
                        <TextField
                            placeholder='Search by area'
                            variant='outlined'
                            size='small'
                            fullWidth
                        />
                    </div>
                </Grid>
                <Grid item xs={12} md={2}>
                    <div className='mt-4'>
                        <Button
                            sx={{ width: "100%" }}
                            variant='contained'
                            color='success'
                        >
                            <Search />
                            Search
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={12} md={7} sx={{ marginTop: { xs: '20px', md: '0' } }}>
                    <GoogleMap />
                </Grid>
                <Grid item xs={12} md={3} sx={{ marginTop: { xs: '20px', md: '0' } }}>
                    <MyCalendar />
                </Grid>
                <Grid item xs={12}>
                    <CardView />
                </Grid>
            </Grid>
            <Footer />
        </>
    );
};

export default Home;
