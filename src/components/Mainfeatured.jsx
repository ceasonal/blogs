import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import testimage from'../images/test.jpg'

export default function MainFeaturedPost() {
//   const { post } = props;

  return (
    <Paper
      sx={{
        position: 'relative',
        // backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${testimage})`,
        marginLeft:'35px',
        marginRight:'35px'
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={testimage} alt={"abc"} />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              Main Featured Post
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dignissimos accusamus, eveniet nobis
            </Typography>
            <Link variant="subtitle1" href="#">
              hello
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}