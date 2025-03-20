import React from 'react';
import { Box, Avatar, Typography, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    padding: '16px',
    background: 'linear-gradient(to bottom right, lightpink, white, pink)', 
    boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
    borderRadius: '12px',
    border: '2px solid white', // Add a white border
  },
  title: {
    fontSize: '4rem', // Large font size
    fontWeight: '800', 
    marginBottom: '16px',
    color: 'black',
  },
  userItem: {
    marginBottom: '8px',
    color: 'black',
  },
  postCount: {
    color: 'black',
  },
  avatar: {
    width: '50px',
    height: '50px',
  },
});

const TopUsers: React.FC = () => {
  const classes = useStyles();
  
  const users = [
    { id: 1, name: 'User  1', postCount: 120, profilePic: '/./images/profileImg1.JPG' },
    { id: 2, name: 'User  2', postCount: 115, profilePic: '/./images/profileImg2.JPG' },
    { id: 3, name: 'User  3', postCount: 110, profilePic: '/./images/profileImg3.JPG' },
    { id: 4, name: 'User  4', postCount: 108, profilePic: '/./images/profileImg4.JPG' },
    { id: 5, name: 'User  5', postCount: 102, profilePic: '/./images/profileImg5.JPG' },
  ];

  return (
    <Box className={classes.root}>
      <Typography variant="h5" className={classes.title}>Top Users</Typography> {/* Use variant for larger text */}
      <List>
        {users.map((user) => (
          <ListItem key={user.id} className={classes.userItem}>
            <ListItemAvatar>
              <Avatar src={user.profilePic} className={classes.avatar} />
            </ListItemAvatar>
            <ListItemText 
              primary={user.name} 
              secondary={
                <Typography className={classes.postCount}>
                  Posts: {user.postCount}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TopUsers;