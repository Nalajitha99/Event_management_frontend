import { Box, Button, Checkbox, Container, createTheme, FormControlLabel, Grid, Stack, TextField, ThemeProvider, Typography } from '@mui/material';
import React, { useState } from 'react';
import bgVideo from '../../Assets/background_video.mp4';
import { useNavigate } from 'react-router-dom';
import { assets } from '../../Assets/assets';
import axios from 'axios';

const Login = () => {
    const boxstyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: { xs: "90%", sm: "75%" },
        height: { xs: "80%", sm: "70%" },
        bgcolor: "rgba(0, 0, 0, 0.5)",
        border: "none",
        boxShadow: 24,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    };

    const darkTheme = createTheme({
        palette: {
            mode: "dark",
        },
    });

    const [remember, setRemember] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8080/authenticate', {
                username: username,
                password: password
            });
            
            const token = response.data.token;
            if (token) {
                localStorage.setItem('token', token);
                navigate('/home');
            } else {
                alert('Authentication failed. Token not received.');
            }
        } catch (error) {
            console.error('Login failed', error);
            alert('Login failed. Please check your credentials.');
        }
    };

    return (
        <div style={{ height: "100vh", color: "#f5f5f5" }}>
            <video
                autoPlay
                loop
                muted
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    minWidth: "100%",
                    minHeight: "100%",
                    zIndex: -1,
                    objectFit: "cover",
                    filter: "brightness(0.5)"
                }}
            >
                <source src={bgVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <Box sx={boxstyle}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Box
                            style={{
                                position: 'relative',
                                overflow: 'hidden',
                                height: "100%",
                                width: "100%"
                            }}
                        >
                            <video
                                autoPlay
                                loop
                                muted
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    minWidth: "100%",
                                    minHeight: "100%",
                                    zIndex: -1,
                                    objectFit: "cover",
                                    filter: "brightness(0.5)"
                                }}
                            >
                                <source src={bgVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <ThemeProvider theme={darkTheme}>
                            <Container sx={{ p: 2 }}>
                                <Box height={35} />
                                <Box sx={{ textAlign: "center" }}>
                                    <img src={assets.logo12} alt='' style={{ width: "200px", height: "80px" }} />
                                    <Typography component="h1" variant="h5" sx={{ mt: 2 }}>
                                        Log In
                                    </Typography>
                                </Box>
                                <Box height={35} />
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant='filled'
                                            required
                                            fullWidth
                                            id='username'
                                            name='username'
                                            label='Username'
                                            autoComplete='username'
                                            placeholder='Enter your Username'
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            sx={{ width: '100%' }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant='filled'
                                            required
                                            fullWidth
                                            id='password'
                                            type='password'
                                            name='password'
                                            label='Password'
                                            autoComplete='new-password'
                                            placeholder='Enter your Password'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            sx={{ width: '100%' }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Stack direction="row" spacing={2} justifyContent="space-between">
                                            <FormControlLabel
                                                control={<Checkbox checked={remember} onChange={() => setRemember(!remember)} />}
                                                label="Remember Me"
                                            />
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            variant="contained"
                                            type='submit'
                                            fullWidth
                                            size='large'
                                            color='secondary'
                                            sx={{
                                                borderRadius: 28,
                                                color: "#ffffff",
                                                backgroundColor: "purple",
                                            }}
                                            onClick={handleLogin}
                                        >
                                            Log In
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Stack direction="row" spacing={2} justifyContent="center">
                                            <Typography variant="body2" component="span" style={{ marginTop: "10px" }}>
                                                Not Registered Yet?{" "}
                                                <span
                                                    style={{ color: "#beb4fb", cursor: "pointer" }}
                                                    onClick={() => navigate("/signup")}
                                                >
                                                    Create an Account
                                                </span>
                                            </Typography>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Container>
                        </ThemeProvider>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default Login;
