// src/components/TrendingPosts.tsx
import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CommentIcon from '@mui/icons-material/Comment'; // Import the comment icon
import VisibilityIcon from '@mui/icons-material/Visibility'; // Import the visibility icon for impressions

const useStyles = makeStyles({
  root: {
    padding: '16px',
    background: 'linear-gradient(to bottom right, lightpink, white, pink)', 
    boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
    borderRadius: '12px',
    border: '2px solid white',
  },
  postCard: {
    marginBottom: '16px',
    background: 'lightpink', // Ensure this is applied
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: 'none', // Remove default shadow if needed
  },
  media: {
    height: 200,
  },
  content: {
    padding: '16px',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1.75rem', // Increased font size for the title
    marginBottom: '8px',
    color: '#d5006d', // Change title color for better visibility
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)', // Optional: add a subtle text shadow
  },
  body: {
    fontSize: '1.1rem', // Slightly larger font size for content
    lineHeight: '1.5', // Increase line height for better readability
    marginBottom: '8px',
    color: '#333', // Darker color for content
  },
  metrics: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.875rem',
    color: '#555',
  },
  metricItem: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '16px', // Space between metrics
  },
});

const TrendingPosts: React.FC = () => {
  const classes = useStyles();

  const posts = [
    { 
      id: 1, 
      title: 'The Beauty of Forest', 
      content: 'The gentle sound of water cascading over rocks creates a soothing symphony in the heart of the forest. This serene scene showcases the harmony of nature, where every drop tells a story of life and renewal.', 
      commentCount: 50, 
      impressionCount: 1400, 
      image: '/./images/post1.JPG' 
    },
    { 
      id: 2, 
      title: 'Serenity at Dusk', 
      content: "As the sun dips below the horizon, the sky transforms into a canvas of vibrant hues. This breathtaking sunset captures the tranquil beauty of nature, inviting us to pause and reflect on the day's end.", 
      commentCount: 45, 
      impressionCount: 2675, 
      image: '/./images/post2.JPG' 
    },
  ];

  return (
    <Box className={classes.root}>
      <Typography variant="h5" gutterBottom>
        Trending Posts
      </Typography>
      {posts.map((post) => (
        <Card key={post.id} className={classes.postCard}>
          <CardMedia component="img" className={classes.media} image={post.image} alt={post.title} />
          <CardContent className={classes.content}>
            <Typography className={classes.title}>{post.title}</Typography>
            <Typography className={classes.body}>{post.content}</Typography>
            <Box className={classes.metrics}>
              <Box className={classes.metricItem}>
                <CommentIcon style={{ marginRight: '4px' }} />
                <Typography variant="caption" display="block">
                  {post.commentCount}
                </Typography>
              </Box>
              <Box className={classes.metricItem}>
                <VisibilityIcon style={{ marginRight: '4px' }} />
                <Typography variant="caption" display="block">
                  {post.impressionCount}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default TrendingPosts;