import React from 'react';
import { Container, Grid, TextField, Button, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CardView from '../../Components/CardView';
import Footer from '../../Components/Footer';
import NavBar from '../../Components/NavBar';
import { useNavigate } from 'react-router-dom';

const ViewEvents = () => {

  const navigate = useNavigate();

  const handleAddEvnt = () => {
    navigate("/addevent")
  }

  return (
    <>
    <NavBar/>
    <Container maxWidth="lg" style={{ marginTop: '50px', marginBottom: '20px' }}>
      <Grid container spacing={2} alignItems="center" justifyContent="space-between">
        <Grid item xs={12} sm={4} lg={4}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search Events"
            InputProps={{
              startAdornment: <SearchIcon />,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4} lg={4}>
          <TextField
            select
            fullWidth
            variant="outlined"
            defaultValue=""
            label='Select Category'
          >
            <MenuItem value="category1">Entertainment</MenuItem>
            <MenuItem value="category2">Education</MenuItem>
            <MenuItem value="category3">Health</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4} lg={4} container justifyContent="flex-end">
          <Button variant="contained" startIcon={<AddIcon />} sx={{backgroundColor:"#6a136a"}} onClick={handleAddEvnt}>
            Add Event
          </Button>
        </Grid>
      </Grid>

      {/* Card Grid */}
      <Grid container spacing={3} style={{ marginTop: '30px' }}>
        {/* {[...Array(6)].map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card style={{ height: '200px' }}>
              <CardContent>
                Card Content Placeholder
              </CardContent>
            </Card>
          </Grid>
        ))} */}
        <CardView/>
      </Grid>

      <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
        <Button variant="contained" startIcon={<ArrowDropDownIcon />} sx={{backgroundColor:"#6a136a"}}>
          View More
        </Button>
      </Grid>
    </Container>
    <Footer/>
    </>
  );
};

export default ViewEvents;
