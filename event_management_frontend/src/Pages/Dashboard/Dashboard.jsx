import React from 'react'
import NavBar from '../../Components/NavBar'
import GoogleMap from '../../Components/GoogleMap'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { Search } from '@mui/icons-material'

const Dashboard = () => {
  return (
    <div>
        <NavBar userType="admin"/>
        <Grid container spacing={0} item xs={8}>
            <Grid item xs={6}>
                <div className='mt-5 ml-5'>
                    <Typography variant='h5'>
                        See Events Near By
                    </Typography>
                    <Typography>
                        Join to nearby event based on your location
                    </Typography>
                </div>
            </Grid>
            <Grid item xs={3}>
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
        </Grid>
        <GoogleMap/>

    </div>
  )
}

export default Dashboard