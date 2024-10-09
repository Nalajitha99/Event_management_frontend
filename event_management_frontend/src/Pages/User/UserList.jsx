import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Button, Grid, Paper } from '@mui/material';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const UserList = () => {
  const borderColor = '#6a136a'; 

  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:8080/api/v1/user/getAllUsers', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the user data!", error);
      });
  }, []);

  const handleViewMore = (customerId) => {
    navigate(`/viewuser/${customerId}`); 
  };

  return (
    <>
    <NavBar userType={'admin'}/>
    <Grid container xs={12} sx={{padding: '0 20px', justifyContent: 'center'}}>
    <Grid item xs={12} sm={10} md={8} lg={10}>
    <TableContainer style={{ marginTop: '50px', marginBottom:'20px' }} component={Paper}>
      <Typography variant="h4" style={{ fontWeight:"bold", color:"#6a136a", marginBottom: '20px' }}>
        User List
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ border: `2px solid ${borderColor}`, fontWeight:"bold" }}>User Id</TableCell>
            <TableCell align="center" sx={{ border: `2px solid ${borderColor}`, fontWeight:"bold" }}>Role</TableCell>
            <TableCell align="center" sx={{ border: `2px solid ${borderColor}`, fontWeight:"bold" }}>First Name</TableCell>
            <TableCell align="center" sx={{ border: `2px solid ${borderColor}`, fontWeight:"bold" }}>Last Name</TableCell>
            <TableCell align="center" sx={{ border: `2px solid ${borderColor}`, fontWeight:"bold" }}>NIC No</TableCell>
            <TableCell align="center" sx={{ border: `2px solid ${borderColor}`, fontWeight:"bold" }}>Contact No</TableCell>
            <TableCell align="center" sx={{ border: `2px solid ${borderColor}`, fontWeight:"bold" }}></TableCell>
            {/* <TableCell align="center" sx={{ border: `2px solid ${borderColor}` }}></TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <TableRow key={index}>
                <TableCell align="center" sx={{ border: `1px solid ${borderColor}` }}>{user.customerId}</TableCell>
                <TableCell align="center" sx={{ border: `1px solid ${borderColor}` }}>{user.role}</TableCell>
                <TableCell align="center" sx={{ border: `1px solid ${borderColor}` }}>{user.firstName}</TableCell>
                <TableCell align="center" sx={{ border: `1px solid ${borderColor}` }}>{user.lastName}</TableCell>
                <TableCell align="center" sx={{ border: `1px solid ${borderColor}` }}>{user.nic}</TableCell>
                <TableCell align="center" sx={{ border: `1px solid ${borderColor}` }}>{user.contactNo}</TableCell>
                <TableCell align="center" sx={{ border: `1px solid ${borderColor}` }}>
                    <Button
                      variant='contained'
                      color='secondary'
                      sx={{ backgroundColor: "#6a136a" }}
                      onClick={() => handleViewMore(user.customerId)}
                    >
                      View more
                    </Button>
                  </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={7} align="center" sx={{ border: `1px solid ${borderColor}` }}>No Users available</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
    </Grid>
    <Footer/>
    </>
  );
};

export default UserList;
