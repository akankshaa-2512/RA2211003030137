// src/components/Feed.tsx
import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    padding: '16px',
    background: 'linear-gradient(to bottom right, lightpink, white, pink)', 
    boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
    borderRadius: '12px',
    border: '2px solid white', // Add a white border
  },
  feedCard: {
    marginBottom: '16px',
  },
  media: {
    height: 200,
  },
  content: {
    padding: '16px',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1.5rem', // Adjust font size as needed
    color: '#d5006d', // Pink color for the title
    marginBottom: '8px',
  },
});

const Feed: React.FC = () => {
  const classes = useStyles();

  const feed = [
    { 
      id: 1, 
      title: 'Majestic Cascade', 
      content: 'Breathtaking waterfall in the mountains.', 
      image: '/./images/feed1.JPG' // Path to the waterfall image
    },
    { 
      id: 2, 
      title: 'Canvas of Colors', 
      content: 'Stunning sunset with vibrant clouds.', 
      image: '/./images/feed2.JPG' // Path to the sunset image
    },
    { 
      id: 3, 
      title: 'Elegance in Bloom', 
      content: 'Lotus flower reflecting sunlight.', 
      image: '/./images/feed3.JPG' // Path to the lotus image
    },
  ];

  return (
    <Box className={classes.root}>
      <Typography variant="h5" gutterBottom>
        Real-time Feed
      </Typography>
      {feed.map((post) => (
        <Card key={post.id} className={classes.feedCard}>
          <CardMedia component="img" className={classes.media} image={post.image} alt={post.title} />
          <CardContent className={classes.content}>
            <Typography className={classes.title}>{post.title}</Typography> {/* Apply pink color to title */}
            <Typography variant="body2">{post.content}</Typography> {/* Shortened content */}
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Feed;