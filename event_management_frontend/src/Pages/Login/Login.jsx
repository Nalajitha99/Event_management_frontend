import { Box, Button, Checkbox, Container, createTheme, FormControlLabel, Grid, Stack, TextField, ThemeProvider, Typography } from '@mui/material'
import React, { useState } from 'react'
import bgVideo from '../../Assets/background_video.mp4'
import { useNavigate } from 'react-router-dom'
import { assets } from '../../Assets/assets'
import axios from 'axios';

const Login = () => {

    const boxstyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "75%",
        height: "70%",
        bgcolor: "rgba(0, 0, 0, 0.5)",
        border: "none",
        boxShadow: 24,
    }

    const center = {
        position: "relative",
        top: "50%",
        left: "28%",
    }

    const darkTheme = createTheme({
        palette: {
            mode: "dark",
        },
    })

    const [remember, setRemember] = useState(false)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()
    
    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8080/authenticate', {
                username: username,
                password: password
            });
            
            const token = response.data.token;
            const role = response.data.role;
            const userName = response.data.username;
            if (token) {
                localStorage.setItem('token', token); 
                sessionStorage.setItem('role', role); 
                localStorage.setItem('username', userName);

                if (role === 'ADMIN') {
                    navigate('/dashboard'); 
                } else if (role === 'USER') {
                    navigate('/home');
                }

            setTimeout(() => {
                localStorage.removeItem('token');
                sessionStorage.removeItem('role');
                localStorage.removeItem('username');
                alert('Session Expired!... Please Login again. ')
                navigate('/login');
               
            }, 3600000); 
            
           

            } else {
                alert(response.data.message);   
            }
            
        } catch (error) {
            console.error('Login failed', error);
            alert(error);
        }
    };
    

  return (
    <>
        <div
            style={{
                height: "100vh",
                color: "#f5f5f5",
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

            <Box sx={boxstyle}>
                <Grid container>
                    <Grid item xs={12} sm={12} lg={6}>
                        <Box
                            style={{
                                position: 'relative',
                                overflow: 'hidden',
                                height: "70vh",
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
                    <Grid item xs={12} sm={12} lg={6}>
                        <ThemeProvider theme={darkTheme}>
                        <Container>
                            <Box height={35}/>
                            <Box sx={center}>
                                {/* <Avatar
                                    sx={{  mb:"4px", bgcolor:"#ffffff" }}
                                >
                                    <MdOutlineAccountCircle />
                                </Avatar> */}

                                <img src={assets.logo12} alt='' style={{width:"200px",height:"80px"}}/>

                                <Typography component="h1" variant="h5" sx={{ml:"15%"}}>
                                    Log In
                                </Typography>
                            </Box>
                            <Box height={35}/>
                            <Grid container spacing={1}>
                                <Grid item xs={12} sx={{ ml: "3em", mr: "3em", mb:"1em" }}>
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
                                    />
                                </Grid>
                                <Grid item xs={12} sx={{ ml: "3em", mr: "3em", mb:"1em" }}>
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
                                    />
                                </Grid>
                                <Grid item xs={12} sx={{ ml:"3em", mr:"3em", mb:"1em" }}>
                                    <Stack direction="row" spacing={2}>
                                        <FormControlLabel
                                            sx={{ width:"60%"}}
                                            onClick={() => setRemember(!remember)}
                                            control={<Checkbox checked={remember}/>}
                                            label="Remember Me"
                                        />
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} sx={{ ml:"5em", mr:"5em" }}>
                                    <Button 
                                        variant="contained"
                                        type='submit'
                                        fullWidth="true"
                                        size='large'
                                        color='secondary'
                                        sx={{
                                            ml:"10px",
                                            mr:"20px",
                                            borderRadius:28,
                                            color:"#ffffff",
                                            minWidth:"170px",
                                            backgroundColor:"purple",
                                        }}
                                        onClick={handleLogin}
                                    >
                                        Log In
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sx={{ ml:"3em", mr:"3em" }}>
                                    <Stack direction="row" spacing={2}>
                                        <Typography
                                            variant="body2"
                                            component="span"
                                            style={{marginTop:"10px"}}
                                        >
                                            Not Registered Yet?{" "}
                                            <span
                                                style={{color:"#beb4fb", cursor:"pointer"}}
                                                onClick={() => {
                                                    navigate("/signup")
                                                }}
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
    </>
  )
}

export default Login