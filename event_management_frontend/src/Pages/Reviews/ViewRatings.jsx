import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography, Box } from '@mui/material';
import { Star } from '@mui/icons-material';

const ViewRatings = () => {
    const [ratings, setRatings] = useState([]);

    useEffect(() => {
        const fetchRatings = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/rating/getAllRatings', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`, 
                    },
                });
                setRatings(response.data);
            } catch (error) {
                console.error('Error fetching ratings:', error);
            }
        };

        fetchRatings();
    }, []);

    return (
        <Box
            sx={{
                padding: 2,
                maxHeight: '300px', 
                overflowY: 'auto', 
                border: '1px solid #ddd',
                borderRadius: 2,
                backgroundColor: '#f9f9f9',
            }}
        >
            <List>
                {ratings.map((rating) => (
                    <ListItem key={rating.ratingId} alignItems="flex-start" sx={{ mb: 1 }}>
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: '#6a136a' }}>
                                <Star />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <Typography variant="h6" sx={{ color: '#6a136a' }}>
                                    {rating.username}
                                </Typography>
                            }
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        {`Rating: ${rating.stars}`}
                                    </Typography>
                                    {` — ${rating.comment}`}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default ViewRatings;
