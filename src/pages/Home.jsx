import React from 'react'
import Navbar from '../components/Navbar'
import Blogcard from '../components/Blogcard'
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import Carouselblog from '../components/Carouselblog';
// import 'bootstrap/dist/css/bootstrap.min.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Home = () => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Navbar />
        {/* <Carouselblog /> */}
        <div
          style={{
            backgroundColor: darkTheme.palette.background.default, // Use the theme's background color
            minHeight: '100vh', // Set a minimum height to fill the viewport
            
          }}>
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <Blogcard />
            <Blogcard />
            <Blogcard />
          </div>
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <Blogcard />
            <Blogcard />
            <Blogcard />
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default Home