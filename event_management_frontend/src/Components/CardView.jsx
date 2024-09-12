// import { Container, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material'
// import React from 'react'
// import Data from '../Assets/Data1.json'
// import CardActionArea from '@mui/material/CardActionArea'
// import CardMedia from '@mui/material/CardMedia'

// const CardView = () => {
//   return (
//     <>
//         <Container maxWidth='lg'>
//             <Typography variant='h5' style={{marginTop:"50px"}}>
//                 Upcoming Events
//             </Typography>

//             <Grid Container spacing={5} style={{marginTop:"20px"}}>
//                 {Data.map((result,index) => (
//                     <Grid item xs={12} sm={4} md={4} key={index}>
//                         <Card sx={{ maxWidth: 345 }} style={{padding:"10px",marginBottom:"30px"}}>
//                             <CardActionArea>
//                                 <CardMedia
//                                     component="img"
//                                     height="140"
//                                     image={require(`../Assets/${result.image}`)}
//                                     alt="green iguana"
//                                     style={{borderRadius:"5px"}}
//                                 />
//                                 <CardContent>
//                                 <Typography gutterBottom variant="h5" component="div">
//                                     {result.title}
//                                 </Typography>
//                                 <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//                                     {result.date}
//                                 </Typography>
//                                 <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//                                     {result.time}
//                                 </Typography>
//                                 <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//                                     {result.venue}
//                                 </Typography>
//                                 <Typography variant="h6" sx={{ color: 'blue' }}>
//                                     {result.ticket}
//                                 </Typography>
//                                 </CardContent>
//                             </CardActionArea>
//                             <CardActions>
//                                 <Button variant="contained" size="medium">
//                                     Buy Tickets
//                                 </Button>
//                             </CardActions>
//                         </Card>
//                     </Grid>
//                 ))}
//             </Grid>

//         </Container>
//     </>
//   )
// }

// export default CardView

import { Container, Typography, Grid, Card, CardContent, CardActions, Button, CardActionArea, CardMedia } from '@mui/material';
import React from 'react';
import Data from '../Assets/Data1.json';

const CardView = () => {
  return (
    <>
      <Container maxWidth='lg'>
        <Typography variant='h5' style={{ marginTop: "50px" }}>
          Upcoming Events
        </Typography>

        <Grid container spacing={5} style={{ marginTop: "20px" }}>
          {Data.map((result, index) => (
            <Grid item xs={12} sm={4} md={4} key={index}>
              <Card sx={{ maxWidth: 345 }} style={{ padding: "10px", marginBottom: "30px" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={require(`../Assets/${result.image}`)}
                    alt={result.title}
                    style={{ borderRadius: "5px" }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {result.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {result.date}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {result.time}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {result.venue}
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#6a136a' }}>
                      {result.ticket}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button variant="contained" size="medium" sx={{backgroundColor:"#6a136a"}}>
                    Buy Tickets
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default CardView;
