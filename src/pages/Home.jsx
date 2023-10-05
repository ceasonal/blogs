import React from "react";
import Navbar from "../components/Navbar";
import Blogcard from "../components/Blogcard";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Footer from "../components/Footer";
import Typography from "@mui/material/Typography";
import MainFeaturedPost from "../components/Mainfeatured";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Home = () => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Navbar />
        <div
          style={{
            backgroundColor: darkTheme.palette.background.default, // Use the theme's background color
            minHeight: "100vh", // Set a minimum height to fill the viewports
          }}
        >
          <br />
          <MainFeaturedPost />
          <br />
          <Typography align="center" color="textPrimary">
            Trending Now
          </Typography>
          <br />
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <Blogcard />
            <Blogcard />
            <Blogcard />
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <Blogcard />
            <Blogcard />
            <Blogcard />
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
};

export default Home;
