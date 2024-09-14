import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button, Grid } from '@mui/material';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';

const users = [

    {userId:'1', firstName:'Sanjana', lastName:'Nalajitha', nicNo:'991801332v', contactNo:'0718965028'},
    {userId:'2', firstName:'firstname1', lastName:'lastname1', nicNo:'981856332v', contactNo:'0718965028'},
    {userId:'3', firstName:'firstname2', lastName:'lastname2', nicNo:'891801372v', contactNo:'0718965028'},
    {userId:'4', firstName:'firstname3', lastName:'lastname3', nicNo:'691851332v', contactNo:'0718965028'},
];

const UserList = () => {
  const borderColor = '#6a136a'; 

  return (
    <>
    <NavBar userType={'admin'}/>
    <Grid container xs={12} sx={{ maxWidth:'100%'}}>
    <TableContainer component={Paper} style={{ marginTop: '50px', marginBottom:'20px' }}>
      <Typography variant="h5" style={{ padding: '16px' }}>
        User List
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ border: `2px solid ${borderColor}` }}>UserId</TableCell>
            <TableCell align="center" sx={{ border: `2px solid ${borderColor}` }}>First Name</TableCell>
            <TableCell align="center" sx={{ border: `2px solid ${borderColor}` }}>Last Name</TableCell>
            <TableCell align="center" sx={{ border: `2px solid ${borderColor}` }}>NIC No</TableCell>
            <TableCell align="center" sx={{ border: `2px solid ${borderColor}` }}>Contact No</TableCell>
            <TableCell align="center" sx={{ border: `2px solid ${borderColor}` }}></TableCell>
            {/* <TableCell align="center" sx={{ border: `2px solid ${borderColor}` }}></TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <TableRow key={index}>
                <TableCell align="center" sx={{ border: `1px solid ${borderColor}` }}>{user.userId}</TableCell>
                <TableCell align="center" sx={{ border: `1px solid ${borderColor}` }}>{user.firstName}</TableCell>
                <TableCell align="center" sx={{ border: `1px solid ${borderColor}` }}>{user.lastName}</TableCell>
                <TableCell align="center" sx={{ border: `1px solid ${borderColor}` }}>{user.nicNo}</TableCell>
                <TableCell align="center" sx={{ border: `1px solid ${borderColor}` }}>{user.contactNo}</TableCell>
                <TableCell align="center" sx={{ border: `1px solid ${borderColor}` }}><Button variant='contained' color='secondary' sx={{backgroundColor:"#6a136a"}}>View more</Button></TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={7} align="center" sx={{ border: `1px solid ${borderColor}` }}>No bookings available</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
    <Footer/>
    </>
  );
};

export default UserList;
