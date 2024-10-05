import React, { useState } from 'react';
import { Container, Grid, TextField, Button, Typography, MenuItem, Box, createTheme, ThemeProvider } from '@mui/material';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { assets } from '../../Assets/assets'

const SignUp = () => {

    const navigate = useNavigate();

    const darkTheme = createTheme({
        palette: {
            mode: "light",
        },
    })

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        password: '',
        confirmedPassword: '',
        nic: '',
        email: '',
        contactNo: '',
        address: '',
        username:'',
        role: 'ADMIN'
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.firstName) newErrors.firstName = 'First Name is required';
        if (!formData.lastName) newErrors.lastName = 'Last Name is required';
        if (!formData.gender) newErrors.gender = 'Gender is required';
        if (!formData.username) newErrors.username = 'Username is required';

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
            newErrors.email = 'Invalid email address';
        }

        if (!formData.contactNo) {
            newErrors.contactNo = 'Contact No is required';
        } else if (!/^07\d{8}$/.test(formData.contactNo)) {
            newErrors.contactNo = 'Contact No must start with "07" and be 10 digits long';
        }

        if (!formData.nic) {
            newErrors.nic = 'NIC No is required';
        } else if (!/^([0-9]{9}[vV]|[0-9]{12})$/.test(formData.nic)) {
            newErrors.nic = 'Invalid NIC No. Format: 9 digits + V/v or 12 digits';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        }

        if (formData.password !== formData.confirmedPassword) {
            newErrors.confirmedPassword = 'Passwords do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleClear = () => {
        setFormData({
            firstName: '',
            lastName: '',
            gender: '',
            password: '',
            confirmedPassword: '',
            nic: '',
            email: '',
            contactNo: '',
            address: '',
            username: '',
            role: 'ADMIN'
        });
        setErrors({});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            try {
                const response = await axios.post('http://localhost:8080/api/v1/user/saveUser', formData);
                console.log(response.data);

                handleClear();

                navigate('/login');
            } catch (error) {
                console.error('Error during signup:', error);
            }
        }
    };

    return (
        <>
            <div
                style={{
                    backgroundSize: "cover",
                    height: "100vh",
                    color: "#f5f5f5",
                }}
            >
                <img src={assets.logo11} alt='' style={{ width: "300px", height: "140px", marginLeft: "100px", marginBottom: "20px", marginTop: "20px" }} />
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "75%",
                        height: "90%",
                        bgcolor: "rgba(0, 0, 0, 0)",
                        border: "none",
                    }}
                >
                    <ThemeProvider theme={darkTheme}>
                        <Container maxWidth="md" style={{ marginTop: '50px' }}>
                            <Typography variant="h3" align="center" gutterBottom sx={{ color: "black", fontWeight: "bold", marginBottom: "50px" }}>
                                Add AdminUser
                            </Typography>
                            <form onSubmit={handleSubmit}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="First Name"
                                            name='firstName'
                                            variant="outlined"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            error={!!errors.firstName}
                                            helperText={errors.firstName}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Last Name"
                                            name='lastName'
                                            variant="outlined"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            error={!!errors.lastName}
                                            helperText={errors.lastName}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            select
                                            label="Gender"
                                            name='gender'
                                            variant="outlined"
                                            value={formData.gender}
                                            onChange={handleChange}
                                            error={!!errors.gender}
                                            helperText={errors.gender}
                                        >
                                            <MenuItem value="Male">Male</MenuItem>
                                            <MenuItem value="Female">Female</MenuItem>
                                            <MenuItem value="Other">Other</MenuItem>
                                        </TextField>
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="NIC No"
                                            name='nic'
                                            variant="outlined"
                                            value={formData.nic}
                                            onChange={handleChange}
                                            error={!!errors.nic}
                                            helperText={errors.nic}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={12}>
                                        <TextField
                                            fullWidth
                                            label="Username"
                                            name='username'
                                            variant="outlined"
                                            value={formData.username}
                                            onChange={handleChange}
                                            error={!!errors.username}
                                            helperText={errors.username}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            type="password"
                                            name='password'
                                            label="Password"
                                            variant="outlined"
                                            value={formData.password}
                                            onChange={handleChange}
                                            error={!!errors.password}
                                            helperText={errors.password}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            type="password"
                                            name='confirmedPassword'
                                            label="Re-enter Password"
                                            variant="outlined"
                                            value={formData.confirmedPassword}
                                            onChange={handleChange}
                                            error={!!errors.confirmedPassword}
                                            helperText={errors.confirmedPassword}
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="E-mail"
                                            name='email'
                                            variant="outlined"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            error={!!errors.email}
                                            helperText={errors.email}
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Contact No"
                                            name='contactNo'
                                            variant="outlined"
                                            value={formData.contactNo}
                                            onChange={handleChange}
                                            error={!!errors.contactNo}
                                            helperText={errors.contactNo}
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            multiline
                                            rows={4}
                                            label="Address"
                                            name='address'
                                            variant="outlined"
                                            value={formData.address}
                                            onChange={handleChange}
                                            error={!!errors.address}
                                            helperText={errors.address}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <Button
                                            fullWidth
                                            variant="outlined"
                                            color="secondary"
                                            type="reset"
                                            onClick={handleClear}
                                        >
                                            Clear
                                        </Button>
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            sx={{ backgroundColor: "#6a136a", color: "#fff" }}
                                            color='secondary'
                                            type='submit'
                                        >
                                            SignUp
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Container>
                    </ThemeProvider>
                </Box>
            </div>
        </>
    );
};

export default SignUp;
