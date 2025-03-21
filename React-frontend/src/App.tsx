
import './App.css'
import Feed from './components/Feed/Feed'
import TopUsers from './components/TopUsers/TopUsers'
import TrendingPosts from './components/TrendingPosts/TrendingPosts'

import { Container, Grid, Box , Typography} from '@mui/material';

const App: React.FC = () => {
  return (
    <Container maxWidth={false} disableGutters> 
      <Box display="flex" alignItems="center" mb={3}> 
        <img src="/./images/logo.JPG" alt="Logo" style={{ width: '50px', height: '50px', marginRight: '8px' }} /> 
        <Typography variant="h3" component="h2">Afflysis</Typography> 
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Box>
            <TopUsers />
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box>
            <TrendingPosts />
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box>
            <Feed />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;