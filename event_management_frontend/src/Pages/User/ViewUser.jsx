import React, { useState, useEffect } from 'react';
import NavBar from '../../Components/NavBar';
import { TextField, MenuItem, Grid, Box, FormControl, Select, InputLabel } from '@mui/material';
import Footer from '../../Components/Footer';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ViewUser = () => {
    const { userId } = useParams();
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        nic: '',
        username: '',
        role: '',
        email: '',
        contactNo: '',
        address: '',
    });

    useEffect(() => {
        const fetchUserDetails = async () => {
          try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`http://localhost:8080/api/v1/user/getUserById/${userId}`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            setUser(response.data);
          } catch (error) {
            console.error('Error fetching user details:', error);
          }
        };
    
        fetchUserDetails();
      }, [userId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission (e.g., update user data)
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
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="First Name"
                                name="firstName"
                                variant="outlined"
                                disabled
                                value={user.firstName}
                                onChange={handleChange}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                disabled
                                label="Last Name"
                                name="lastName"
                                variant="outlined"
                                value={user.lastName}
                                onChange={handleChange}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel>Gender</InputLabel>
                                <Select
                                    name="gender"
                                    value={user.gender}
                                    onChange={handleChange}
                                    disabled
                                >
                                    <MenuItem value="Male">Male</MenuItem>
                                    <MenuItem value="female">Female</MenuItem>
                                    <MenuItem value="other">Other</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                disabled
                                label="NIC No"
                                name="nic"
                                variant="outlined"
                                value={user.nic}
                                onChange={handleChange}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                disabled
                                label="Username"
                                name="username"
                                variant="outlined"
                                value={user.username}
                                onChange={handleChange}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                disabled
                                label="Role"
                                name="role"
                                variant="outlined"
                                value={user.role}
                                onChange={handleChange}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                disabled
                                label="E-mail"
                                name="email"
                                variant="outlined"
                                type="email"
                                value={user.email}
                                onChange={handleChange}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                disabled
                                label="Contact No"
                                name="contactNo"
                                variant="outlined"
                                value={user.contactNo}
                                onChange={handleChange}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                disabled
                                multiline
                                rows={4}
                                label="Address"
                                name="address"
                                variant="outlined"
                                value={user.address}
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                </form>
            </Box>
            <Footer />
        </>
    );
};

export default ViewUser;
