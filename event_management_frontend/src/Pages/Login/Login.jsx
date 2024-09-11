import { Avatar, Box, Button, Checkbox, Container, createTheme, FormControlLabel, Grid, Stack, TextField, ThemeProvider, Typography } from '@mui/material'
import React, { useState } from 'react'
import bgVideo from '../../Assets/background_video.mp4'
import sideImg from '../../Assets/login_sideImg.jpg'
import { useNavigate } from 'react-router-dom'
import { assets } from '../../Assets/assets'

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

    const navigate = useNavigate()

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
                    filter: "brightness(0.5)" // Optional: Darken the video
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
                                    filter: "brightness(0.5)" // Optional: Darken the video slightly
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
                                        id='email'
                                        name='email'
                                        label='Username'
                                        autoComplete='email'
                                        placeholder='Enter your email'
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
                                        sx={{
                                            ml:"10px",
                                            mr:"20px",
                                            borderRadius:28,
                                            color:"#ffffff",
                                            minWidth:"170px",
                                            backgroundColor:"purple"
                                        }}
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