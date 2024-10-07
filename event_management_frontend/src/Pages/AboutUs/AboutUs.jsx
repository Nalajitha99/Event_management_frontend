import React from 'react'
import NavBar from '../../Components/NavBar'
import { Container, Grid, Typography, Box } from '@mui/material';
import Footer from '../../Components/Footer';

const AboutUs = () => {
    return (
        <>
            <NavBar />
            <Container>
                <Grid container spacing={4} sx={{ marginTop: '40px' }}>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <Typography
                                variant="h4"
                                gutterBottom
                                sx={{ fontWeight: 'bold' }}
                            >
                                Established in <span style={{ color: '#6a136a' }}>2024</span>
                            </Typography>
                            <Typography variant="body1">
                                EventHub, Sri Lanka's official ticket marketplace for all your
                                entertainment needs. We are dedicated to delivering an exceptional
                                experience, ensuring the highest standards in ticketing services.
                                As your most trusted and reliable online ticket partner, we strive
                                to make every event unforgettable.
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box>
                            <Typography
                                variant="h4"
                                gutterBottom
                                sx={{ fontWeight: 'bold' }}
                            >
                                Industry <span style={{ color: '#6a136a' }}>Experiences</span>
                            </Typography>
                            <Typography variant="body1">
                                Our journey began in 2002 when we established ourselves as a
                                professional event management company. Now, with over 20 years of
                                invaluable industry experience and strong connections with
                                industry experts, we are thrilled to unveil a fresh and exciting
                                experience for our entertainment enthusiasts through EventHub.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Box
                    sx={{
                        backgroundColor: 'black',
                        color: 'white',
                        borderRadius: '8px',
                        marginTop: '40px',
                        marginBottom: '40px',
                        padding: '20px',
                    }}
                >
                    <Typography
                        variant="h5"
                        align="center"
                        sx={{ fontStyle: 'italic' }}
                    >
                        "I firmly believe that the magic of live entertainment should be
                        accessible to all, empowering individuals to embrace extraordinary
                        experiences that enlighten their spirits and inspire lifelong
                        memories."
                    </Typography>
                    <Typography variant="subtitle1" align="center" sx={{ marginTop: '10px' }}>
                        - Founder / CEO - Sanjana Amarasinghe
                    </Typography>
                </Box>
                <Box sx={{ marginTop: '60px', textAlign: 'center' }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
                        Company <span style={{ color: '#6a136a' }}>Highlights</span>
                    </Typography>

                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={12} sm={6} md={3}>
                            <Box sx={{ textAlign: 'center' }}>
                                <Box
                                    sx={{
                                        width: '150px',
                                        height: '150px',
                                        borderRadius: '50%',
                                        border: '10px solid #6a136a',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto',
                                    }}
                                >
                                    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                                        20+
                                    </Typography>
                                </Box>
                                <Typography sx={{ marginTop: '10px' }}>Years In Show Biz</Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <Box sx={{ textAlign: 'center' }}>
                                <Box
                                    sx={{
                                        width: '150px',
                                        height: '150px',
                                        borderRadius: '50%',
                                        border: '10px solid #6a136a',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto',
                                    }}
                                >
                                    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                                        85%+
                                    </Typography>
                                </Box>
                                <Typography sx={{ marginTop: '10px' }}>Market Penetration</Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <Box sx={{ textAlign: 'center' }}>
                                <Box
                                    sx={{
                                        width: '150px',
                                        height: '150px',
                                        borderRadius: '50%',
                                        border: '10px solid #6a136a',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto',
                                    }}
                                >
                                    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                                        1.2k+
                                    </Typography>
                                </Box>
                                <Typography sx={{ marginTop: '10px' }}>Local Events</Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <Box sx={{ textAlign: 'center' }}>
                                <Box
                                    sx={{
                                        width: '150px',
                                        height: '150px',
                                        borderRadius: '50%',
                                        border: '10px solid #6a136a',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto',
                                    }}
                                >
                                    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                                        50+
                                    </Typography>
                                </Box>
                                <Typography sx={{ marginTop: '10px' }}>International Events</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Grid container spacing={4} sx={{ marginTop: '40px', marginBottom: '40px' }}>
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                backgroundColor: '#707070',
                                color: 'white',
                                padding: '50px',
                                borderRadius: '8px',
                                textAlign: 'center',
                                height: '200px'
                            }}
                        >
                            <Typography variant="h6" gutterBottom>
                                Experience, Convenience and
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                                Comprehensive Services,
                            </Typography>
                            <Typography
                                variant="h4"
                                sx={{ fontWeight: 'bold' }}
                            >
                                Under One Roof!
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                backgroundColor: '#6a136a',
                                color: 'white',
                                padding: '50px',
                                borderRadius: '8px',
                                textAlign: 'center',
                                height: '200px'
                            }}
                        >
                            <Typography variant="h6" gutterBottom>
                                "Leading the Way with
                            </Typography>
                            <Typography
                                variant="h4"
                                sx={{ fontWeight: 'bold' }}
                                gutterBottom
                            >
                                Unmatched Expertise
                            </Typography>
                            <Typography variant="h6">
                                and Service."
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Footer />

        </>
    )
}

export default AboutUs