import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Rating, Box } from '@mui/material';
import { Star } from '@mui/icons-material';

const Ratings = () => {
    const [open, setOpen] = useState(false);
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);

    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmit = () => {
        console.log('Review:', review);
        console.log('Rating:', rating);
        handleClose();
    };

    return (
        <div>
            <Button variant="contained" color='secondary' onClick={handleClickOpen} sx={{ backgroundColor: "#6a136a", color: "#fff" }}>
                <Star />
                Rate Us
            </Button>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Submit Your Review</DialogTitle>
                <DialogContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Rating
                            name="rating"
                            value={rating}
                            onChange={(event, newValue) => setRating(newValue)}
                            precision={0.5}
                        />
                        <Box sx={{ ml: 2 }}>{rating}</Box>
                    </Box>

                    <TextField
                        label="Your Review"
                        multiline
                        rows={4}
                        variant="outlined"
                        fullWidth
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                    />
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        variant="contained"
                        color='secondary'
                        sx={{ backgroundColor: "#6a136a", color: "#fff" }}
                    >
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Ratings;
