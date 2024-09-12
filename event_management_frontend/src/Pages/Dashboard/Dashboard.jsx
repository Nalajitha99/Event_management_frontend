import React from 'react'
import NavBar from '../../Components/NavBar'
import GoogleMap from '../../Components/GoogleMap'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { Search } from '@mui/icons-material'
import MyCalendar from '../../Components/Calender'
import CardView from '../../Components/CardView'
import Footer from '../../Components/Footer'

const Dashboard = () => {
  return (
    <>
        <NavBar userType="customer"/>
        <Grid container spacing={0}>
            <Grid item xs={4}>
                <div className='mt-5 ml-5'>
                    <Typography variant='h5'>
                        See Events Near By
                    </Typography>
                    <Typography>
                        Join to nearby event based on your location
                    </Typography>
                </div>
            </Grid>
            <Grid item xs={2}>
                <div className='ml-5 mt-9'>
                    <TextField
                        placeholder='Search by area'
                        variant='outlined'
                        size='small'
                    />
                </div>
            </Grid>
            <Grid item xs={2}>
                <div className='ml-5 mt-9'>
                    <Button
                        sx={{width:"60%",}}
                        placeholder='Search by area'
                        variant='contained'
                        color='success'
                    >
                        <Search/>
                        Search
                    </Button>
                </div>
            </Grid>
            <Grid item xs={7}>
                <GoogleMap/>
            </Grid>
            <Grid item xs={3} sx={{marginTop:"20px",marginLeft:"100px"}}>
                <MyCalendar/>
            </Grid>

            <Grid item xs={12}>
                <CardView/>
            </Grid>
        </Grid>
        <Footer/>


    </>
  )
}

export default Dashboard